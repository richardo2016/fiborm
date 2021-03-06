import DDLSync = require('@fiborm/sql-ddl-sync');

import type { FxSqlQuery } from '@fiborm/sql-query';

import Class_QueryBuilder from './QueryBuilder';
import Instance from './Instance';

import * as SYMBOLS from '../Utils/symbols';
import Property from './Property';
import { configurable } from '../Decorators/accessor';

import { arraify } from '../Utils/array';
import { normalizeCollectionColumn } from '../Utils/endpoints';
import { buildDescriptor } from '../Decorators/property';

import type { FxOrmProperty } from '../@types/property';
import type { FxOrmModel } from '../@types/model';
import type { FxDbDriverNS } from "@fiborm/db-driver";
import type { FxOrmInstance } from '../@types/instance';
import type { FxOrmTypeHelpers } from '../@types/_common';
import type { KnexInstance } from '../../../knex/typings';

import Refs = require('./Refs')

function isProperty (input: any): input is FxOrmProperty.Class_Property {
  return input instanceof Property
}

function isModel (input: any): input is FxOrmModel.Class_Model {
  return input instanceof Model
}

/**
 * @description Model is meta definition about database-like remote endpoints.
 *
 * ```javascript
 * var ORM = require('@fiborm/orm')
 * var endpoint = ORM.create('mysql://localhost:3306/schema')
 *
 * var User = function (endpoint) {
 *      endpoint.define('user', {
 *          username: String,
 *          // built-in property type name
 *          password: 'password'
 *      })
 * }
 *
 * var Role = function (endpoint) {
 *      endpoint.define('role', {
 *          name: String,
 *          description: {
 *              type: 'string'
 *              size: 256
 *          }
 *      })
 * }
 *
 * var Jack = endpoint.New('user')
 * var Administrator = endpoint.New('role')
 * // or
 * var Jack = endpoint.Find('user').where({ username: 'jack' })
 * var Administrator = endpoint.Create('user')
 *  .set('name', 'administrator')
 *  .set('description', `One Site administrator`)
 * ```
 */

const DFLT_ID_DEF = {
    name: 'id',
    type: 'serial',
    key: true
}
const DFLT_KEYS = ['id']
function normalizeKeysInConfig (
    keys: FxOrmModel.Class_ModelConstructOptions['keys'] = DFLT_KEYS
) {
    if (keys === false) return false
    else
        keys = arraify(keys).filter(x => typeof x === 'string')

    if (!Array.isArray(keys) || !keys.length) keys = DFLT_KEYS

    return keys.filter(x => !!x)
}

class Model extends Class_QueryBuilder implements FxOrmModel.Class_Model {
    name: FxOrmModel.Class_Model['name']
    collection: FxOrmModel.Class_Model['collection']

    @configurable(false)
    get isMergeModel () { return false }

    properties: FxOrmModel.Class_Model['properties'] = {};
    /**
     * @description all properties names
     */
    @configurable(false)
    get propertyNames (): string[] {
        return Object.keys(this.properties)
    }
    /**
     * @description all properties
     */
    @configurable(false)
    get propertyList () {
        return Object.values(this.properties)
    }

    // @buildDescriptor({ writable: true, configurable: true, enumerable: true })
    associations: FxOrmModel.Class_Model['associations'] = {};

    @buildDescriptor({ writable: true, configurable: true, enumerable: true })
    associationDefinitions: FxOrmModel.Class_Model['associationDefinitions'] = {};
    /**
     * @description all association names
     */
    @configurable(false)
    get associationNames (): string[] {
        return Object.keys(this.associations)
    }

    settings: any

    @configurable(false)
    get id (): string | undefined {
        return Object.keys(this.keyProperties)[0] || undefined
    }
    @configurable(false)
    get ids (): string[] {
        return this.id ? [this.id] : []
    }
    @configurable(false)
    get idPropertyList () {
        return this.ids.map(id => this.properties[id])
    }

    keyProperties: FxOrmModel.Class_Model['properties'] = {};
    /**
     * @description all key field properties
     */
    @configurable(false)
    get keyPropertyNames (): string[] {
        return Object.keys(this.keyProperties)
    }/**
     * @description all key field properties
     */
    @configurable(false)
    get keyPropertyList () {
        return Object.values(this.keyProperties)
    }

    @configurable(false)
    get keys (): string[] {
        return Object.keys(this.keyProperties);
    }
    @configurable(false)
    get noKeys () { return !this.keyPropertyNames.length }

    orm: FxOrmModel.Class_Model['orm']

    get storeType () { return this.orm.driver.type }

    private get dbdriver(): FxDbDriverNS.Driver {
        return this.orm.driver as any;
    }

    @configurable(false)
    get _symbol () { return SYMBOLS.Model };

    get $dml (): FxOrmModel.Class_Model['$dml'] { return this.orm.$dml };
    get $ddl (): FxOrmModel.Class_Model['$ddl'] { return this.orm.$ddl };
    get schemaBuilder () { return this.orm.$context['_sqlQuery'].knex.schema }
    get queryBuilder () { return this.orm.$context['_sqlQuery'].knex.queryBuilder() }
    get sqlQuery (): FxSqlQuery.Class_Query {
      switch (this.orm.driver.type) {
          case 'mysql':
          case 'sqlite':
              return this.orm.$context['_sqlQuery']
      }
    }

    checkExistenceWhenNoKeys: FxOrmModel.Class_Model['checkExistenceWhenNoKeys']

    get propertyContext(): {
        model: FxOrmModel.Class_Model,
        sqlQuery: FxOrmModel.Class_Model['sqlQuery'],
        knex: KnexInstance
    } {
        return {
            model: this,
            sqlQuery: this.sqlQuery,
            knex: this.orm.$context['_sqlQuery'].knex
        }
    }

    constructor (config: FxOrmModel.Class_ModelConstructOptions) {
        super()

        Object.defineProperty(this, 'name', { value: config.name })
        this.collection = config.collection;
        this.orm = config.orm;
        this.settings = config.settings;

        // normalize it
        ;(() => {
            const specKeyPropertyNames = normalizeKeysInConfig(config.keys)

            /**
             * @todo check if there are more than one serial properties
             */
            Object.keys(config.properties)
                .forEach((prop: string) => {
                    const property = this.addProperty(
                        prop,
                        config.properties[prop],
                    );

                    if (specKeyPropertyNames)
                        if (property.isKeyProperty() || specKeyPropertyNames.includes(prop))
                            this.keyProperties[prop] = property;
                });

            if (specKeyPropertyNames)
                if (this.ids.length === 0) {
                    this.keyProperties[DFLT_ID_DEF.name] = this.addProperty(
                        DFLT_ID_DEF.name,
                        {...DFLT_ID_DEF}
                    )
                } else {
                    // when there's no id property but id rqeuired, fallback to first key property
                    const [maybeId] = this.idPropertyList
                    if (maybeId) {
                        maybeId.primary = true
                        if (maybeId.isIncrementable()) maybeId.serial = true
                    }
                }

            if (this.noKeys && typeof config.howToCheckExistenceWhenNoKeys !== 'function')
                throw new Error(`[${this.isMergeModel ? 'MergeModel' : 'Model'}::constructor] model(collection: ${this.collection}) has no keys and no function config.howToCheckExistenceWhenNoKeys provided.`)

            Object.defineProperty(
                this,
                'checkExistenceWhenNoKeys',
                {
                    value: config.howToCheckExistenceWhenNoKeys,
                    configurable: false,
                    writable: false,
                    enumerable: true
            });
        })();
    }

    isPropertyName (name: string): boolean {
        return this.properties.hasOwnProperty(name);
    }
    isAssociationName (name: string): boolean {
        return this.associations.hasOwnProperty(name);
    }
    isInstance (input: any): input is FxOrmInstance.Class_Instance {
        return (input instanceof Instance) && input.$model === <any>this
    }
    prop (propname: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['prop']>): ReturnType<FxOrmModel.Class_Model['prop']> {
      if (isProperty(propname)) {
        if (this.prop(propname.name) === propname) return propname
        throw new Error(`[Model::prop] given argument(name: ${propname.name}) is one property instance, but not this model(collection: ${this.collection})'s property! check your input.`)
      }

      if (!this.isPropertyName(propname))
          throw new Error(`[${this.isMergeModel ? 'MergeModel' : 'Model'}:prop] property ${propname} doesn't exist in model(collection: ${this.collection})`)

      return this.properties[propname]
    }
    assoc (assocname: string): ReturnType<FxOrmModel.Class_Model['assoc']> {
        if (!this.isAssociationName(assocname))
            throw new Error(`[${this.isMergeModel ? 'MergeModel' : 'Model'}:assoc] association ${assocname} doesn't exist in model(collection: ${this.collection})`)

        return this.associations[assocname]
    }


    sync (): void {
        if (!this.dbdriver.isSql) return ;

        const syncor = new DDLSync.Sync({
            dbdriver: this.dbdriver,
            syncStrategy: 'mixed',
            debug: function (...args: any[]) {
                if (process.env.ORM_DEBUG) console.log.apply(console, args)
            }
        });

        syncor.defineCollection(this.collection, this.properties)
        Object.keys(this.orm.customPropertyTypes).forEach(key => {
            const t = this.orm.customPropertyTypes[key]
            syncor.defineType(key, {
                datastoreType: t.datastoreType,
                valueToProperty: t.valueToProperty,
                propertyToValue: t.propertyToStoreValue
            })
        });

        syncor.sync()

        /* avoid loop */
        if (!this.isMergeModel)
            // synchronize
            Object.values(this.associations)
                .forEach((association) => association.sync())
    }
    drop (): void {
        this.$ddl.dropCollection(this.collection)
    }

    // TODO: migrate to ddl
    hasPropertyRemotely (property: string | FxOrmProperty.Class_Property): boolean {
        if (this.dbdriver.isNoSql) return true;

        let colname: string
        if (typeof property === 'string') {
            if (this.properties[property]) colname = this.properties[property].mapsTo
            else colname = property
        } else {
            colname = property.mapsTo
        }

        const dialect = DDLSync.dialect(this.storeType as any)

        return dialect.hasCollectionColumnsSync(this.dbdriver, this.collection, colname)
    }

    New (
        input: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['New']>
    ): any {
        let base: Fibjs.AnyObject

        switch (typeof input) {
            case 'string':
            case 'number':
                if (this.ids.length >= 2)
                    throw new Error(`[Model::New] model '${this.name}' has more than one id-type properties: ${this.ids.join(', ')}`)

                base = { [this.id]: input }

                break
            case 'object':
                base = <Fibjs.AnyObject>input
                break
            case 'undefined':
                base = {}
                break
            default:
                throw new Error(`[Model::New] invalid input for model(collection: ${this.collection})!`)
        }

        // it also maybe array of instance.
        return new Instance(this, base);
    }

    create (
        kvItem: Fibjs.AnyObject | Fibjs.AnyObject[]
    ): any {
        const isReturnMultiple = Array.isArray(kvItem);
        const list = arraify(kvItem)

        let inst: FxOrmInstance.Class_Instance, instances = <(typeof inst)[]>[]

        list.forEach(kv => {
            inst = new Instance(this, kv)
            inst.$save()

            if (isReturnMultiple)
                instances.push(inst)
            else if (!instances[0])
                instances[0] = inst
        });

        return !isReturnMultiple ? instances[0] : instances
    }

    remove (opts?: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['remove']>) {
        const { where = null } = opts || {};

        return this.$dml.remove(this.collection, { connection: this.orm.connection, where })
    }

    clear (): void {
        return this.$dml.clear(this.collection, { connection: this.orm.connection })
    }

    normalizePropertiesToData (inputdata: Fibjs.AnyObject = {}, target: Fibjs.AnyObject = {}) {
        this.propertyList.forEach((prop: FxOrmProperty.NormalizedProperty) => {
            if (inputdata.hasOwnProperty(prop.name))
                target[prop.mapsTo] = prop.toStoreValue(inputdata[prop.name])
            else if (inputdata.hasOwnProperty(prop.mapsTo))
                target[prop.mapsTo] = prop.toStoreValue(inputdata[prop.mapsTo])
        })

        return target
    }

    normalizeDataSetToWhere (dataset: Fibjs.AnyObject, target: Fibjs.AnyObject = {}) {
        for (let dk in dataset) {
            const nk = normalizeCollectionColumn(dk, this.collection)
            target[nk] = dataset[dk]
        }

        return target
    }

    normalizeDataByProperties (
        storeData: Fibjs.AnyObject = {},
        opts?: FxOrmTypeHelpers.SecondParameter<FxOrmModel.Class_Model['normalizeDataByProperties']>
    ) {
        const {
            onPropertyField = undefined,
            onAssociationField = undefined,
        } = opts || {}
        const call_prop = typeof onPropertyField === 'function'
        const call_assoc = typeof onAssociationField === 'function'

        const target: Fibjs.AnyObject = {}
        this.propertyList.forEach((prop: FxOrmProperty.NormalizedProperty) => {
            const fname = storeData.hasOwnProperty(prop.mapsTo) ?
                prop.mapsTo : storeData.hasOwnProperty(prop.name) ? prop.name : null

            if (!fname) return ;

            if (storeData.hasOwnProperty(fname)) {
                target[prop.name] = prop.fromInputValue(storeData[fname])
                if (call_prop) onPropertyField({
                    origValue: storeData[fname], transformedValue: target[prop.name],
                    fieldname: prop.name, mapsTo: fname
                })
            }
        })

        this.associationNames.forEach(assocName => {
            if (storeData.hasOwnProperty(assocName)) {
                target[assocName] = storeData[assocName]

                if (call_assoc) onAssociationField({
                    origValue: storeData[assocName], transformedValue: target[assocName],
                    fieldname: assocName
                })
            }
        })

        return target
    }

    pickPropertyData (dataset: Fibjs.AnyObject = {}, kvs: Fibjs.AnyObject = {}) {
        this.propertyList.forEach(property => {
            if (dataset.hasOwnProperty(property.name)) kvs[property.name] = dataset[property.name]
        })

        return kvs
    }

    pickIdPropertyData (dataset: Fibjs.AnyObject = {}, kvs: Fibjs.AnyObject = {}) {
        this.idPropertyList.forEach(property => {
            if (dataset.hasOwnProperty(property.name)) kvs[property.name] = dataset[property.name]
        })

        return kvs
    }

    pickAssociationData (dataset: Fibjs.AnyObject = {}, refs: Fibjs.AnyObject = {}) {
        this.associationNames.forEach(assocName => {
            if (dataset.hasOwnProperty(assocName)) refs[assocName] = dataset[assocName]
        })

        return refs
    }

    filterOutAssociatedData (dataset: Fibjs.AnyObject = {}) {
        const kvs = []
        for (let assoc_name in this.associations) {
            const fInfo = this.fieldInfo(assoc_name)
            if (dataset.hasOwnProperty(assoc_name) && fInfo && fInfo.type === 'association')
                kvs.push({
                    association: fInfo.association,
                    dataset: dataset[assoc_name]
                })
        }

        return kvs
    }

    addProperty (
        name: string,
        propDef: FxOrmTypeHelpers.SecondParameter<FxOrmModel.Class_Model['addProperty']>
    ) {
        if (this.fieldInfo(name)) throw new Error(`[Model] propDef '${name}' existed in model '${this.name}'`)

        if ((propDef instanceof Property))
            return this.properties[name] = propDef

        const property = this.properties[name] = new Property(propDef, {
            propertyName: name,
            storeType: this.storeType,
            $ctx: this.propertyContext
        });

        if (this.orm.customPropertyTypes.hasOwnProperty(property.type)) {
            if (!property.transformer.valueToProperty) property.transformer.valueToProperty = this.orm.customPropertyTypes[property.type].valueToProperty
            if (!property.transformer.propertyToStoreValue) property.transformer.propertyToStoreValue = this.orm.customPropertyTypes[property.type].propertyToStoreValue
        }

        return this.properties[name]
    }

    fieldInfo (propertyName: string) {
        if (this.properties.hasOwnProperty(propertyName))
            return {
                type: 'self' as 'self',
                property: this.properties[propertyName]
            }
        if (this.associations.hasOwnProperty(propertyName))
            return {
                type: 'association' as 'association',
                association: this.associations[propertyName]
            }

        return null
    }

    defineAssociation (
        opts: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['defineAssociation']>
    ): FxOrmModel.Class_MergeModel {
        const {
            name, collection, properties,
            howToCheckExistenceWhenNoKeys,

            defineMergeProperties,
            howToGetIdPropertyNames,
            howToCheckHasForSource,
            howToFetchForSource,
            howToSaveForSource,
            howToUnlinkForSource,
            onFindByRef,

            type,
            target
        } = opts

        const assc_def = this.associationDefinitions[name] = (source) => {
            const mergeModel: FxOrmModel.Class_MergeModel = this.associations[name] = new MergeModel({
                name,
                collection,
                orm: this.orm,
                properties: properties,
                settings: this.settings.clone(),
                howToCheckExistenceWhenNoKeys,

                defineMergeProperties,
                howToGetIdPropertyNames,
                howToCheckHasForSource,
                howToFetchForSource,
                howToSaveForSource,
                howToUnlinkForSource,
                onFindByRef,

                mergeCollection: collection,
                type: type,
                source: source,
                target: target,
            })

            return mergeModel
        }

        return assc_def(this)
    }

    hasOne (...args: FxOrmTypeHelpers.Parameters<FxOrmModel.Class_Model['hasOne']>) {
        return Refs.hasOne.apply(this, args);
    }

    extendsTo (...args: FxOrmTypeHelpers.Parameters<FxOrmModel.Class_Model['extendsTo']>) {
        return Refs.extendsTo.apply(this, args);
    }

    hasMany (...args: FxOrmTypeHelpers.Parameters<FxOrmModel.Class_Model['hasMany']>) {
        return Refs.hasMany.apply(this, args);
    }

    hasManyExclusively (...args: FxOrmTypeHelpers.Parameters<FxOrmModel.Class_Model['hasManyExclusively']>) {
        return Refs.hasManyExclusively.apply(this, args);
    }

    belongsToMany (...args: FxOrmTypeHelpers.Parameters<FxOrmModel.Class_Model['belongsToMany']>) {
        return Refs.belongsToMany.apply(this, args);
    }
}

class MergeModel extends Model implements FxOrmModel.Class_MergeModel {
    name: string
    type: 'o2o' | 'o2m' | 'm2o' | 'm2m'
    sourceModel: FxOrmModel.Class_Model
    // sourceForJoin: string
    get sourceKeys () { return this.sourceModel.keys }

    targetModel: FxOrmModel.Class_Model
    // targetForJoin: string
    get targetKeys () { return this.targetModel.keys }

    @configurable(false)
    get isMergeModel () { return true }

    @configurable(false)
    get ids (): string[] {
        return this.associationInfo.howToGetIdPropertyNames({ mergeModel: this })
    }

    @configurable(false)
    get joinPropertyList (): FxOrmModel.Class_MergeModel['joinPropertyList'] {
        return this.propertyList.filter(x => x.isJoinProperty())
    }

    @configurable(false)
    get joinKeys (): string[] {
        const joinProperties = this.joinPropertyList

        if (!joinProperties.length)
            throw new Error(`[MergeModel:joinKeys] no any join property defined.`)

        return Array.from(new Set(joinProperties.map(x => x.name)))
    }

    associationInfo: FxOrmModel.Class_MergeModel['associationInfo']

    @configurable(false)
    get associationKeys (): string[] {
        return Object.keys(this.associations);
    }

    constructor (opts: FxOrmTypeHelpers.ConstructorParams<typeof FxOrmModel.Class_MergeModel>[0]) {
        const {
            mergeCollection, source, target, onFindByRef,
            defineMergeProperties, howToGetIdPropertyNames,
            howToSaveForSource, howToFetchForSource, howToUnlinkForSource,
            howToCheckHasForSource,
            /**
             * @description for MergeModel, deal with options.keys alone to avoid parent `Model`'s processing
             */
            keys,
            ...restOpts
        } = opts

        restOpts.collection = restOpts.collection || mergeCollection
        super({...restOpts, keys: false})

        this.type = opts.type
        this.associationInfo = {
            collection: mergeCollection,
            howToGetIdPropertyNames: howToGetIdPropertyNames,
            onFindByRef: onFindByRef,
            howToSaveForSource,
            howToFetchForSource,
            howToUnlinkForSource,
            howToCheckHasForSource
        }

        this.sourceModel = source
        this.targetModel = target

        if (!isModel(source)) throw new Error(`[MergeModel::constructor] source must be valid model, but got (type: ${typeof source})`)
        // if (!isModel(target)) throw new Error(`[MergeModel::constructor] target must be valid model, but got (type: ${typeof target})`)

        // TODO: forbid changing source model here
        defineMergeProperties({
            sourceModel: source,
            targetModel: target,
            mergeModel: this
        });
    }

    isSourceModel (model: FxOrmModel.Class_Model): boolean {
        return model === this.sourceModel
    }
    isTarget (model: FxOrmModel.Class_Model): boolean {
        return model === this.targetModel
    }

    checkHasForSource ({
        sourceInstance,
        targetInstances
    }: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_MergeModel['checkHasForSource']>
    ): ReturnType<FxOrmModel.Class_MergeModel['checkHasForSource']> {
        if (Array.isArray(targetInstances)) {
            const unfilledTargetInstance = targetInstances.find(inst => !inst.$isPersisted)

            if (unfilledTargetInstance) {
                throw new Error(`[MergeModel::checkHasForSource] there's id-unfull-filled instance, details: \n ${JSON.stringify(unfilledTargetInstance.toJSON())}`)
            }
        }

        return this.associationInfo.howToCheckHasForSource({ mergeModel: this, sourceInstance, targetInstances })
    }

    saveForSource ({
        targetDataSet,
        sourceInstance = null,
        isAddOnly = false
    }: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_MergeModel['saveForSource']>) {
        this.associationInfo.howToSaveForSource({
            mergeModel: this,
            sourceInstance,
            targetDataSet,
            isAddOnly
        })

        return sourceInstance
    }

    findForSource ({
        sourceInstance = null,
        findOptions = undefined
    }: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_MergeModel['findForSource']>) {
        this.associationInfo.howToFetchForSource({ mergeModel: this, sourceInstance, findOptions })
        return sourceInstance
    }

    unlinkForSource ({
        targetInstances,
        sourceInstance = null
    }: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_MergeModel['unlinkForSource']>) {
        this.associationInfo.howToUnlinkForSource({ mergeModel: this, sourceInstance, targetInstances })
        return sourceInstance
    }
}

export default Model
