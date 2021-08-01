/// <reference types="@fibjs/types" />
import Class_QueryBuilder from './QueryBuilder';
import Property from './Property';
import type { FxOrmProperty } from '../@types/property';
import type { FxOrmModel } from '../@types/model';
import type { FxDbDriverNS } from "@fiborm/db-driver";
import type { FxOrmInstance } from '../@types/instance';
import type { FxOrmTypeHelpers } from '../@types/_common';
import type { KnexInstance } from '../../../knex/typings';
declare class Model extends Class_QueryBuilder implements FxOrmModel.Class_Model {
    name: FxOrmModel.Class_Model['name'];
    collection: FxOrmModel.Class_Model['collection'];
    get isMergeModel(): boolean;
    properties: FxOrmModel.Class_Model['properties'];
    /**
     * @description all properties names
     */
    get propertyNames(): string[];
    /**
     * @description all properties
     */
    get propertyList(): FxOrmModel.ModelProperty[];
    associations: FxOrmModel.Class_Model['associations'];
    associationDefinitions: FxOrmModel.Class_Model['associationDefinitions'];
    /**
     * @description all association names
     */
    get associationNames(): string[];
    settings: any;
    get id(): string | undefined;
    get ids(): string[];
    get idPropertyList(): FxOrmModel.ModelProperty[];
    keyProperties: FxOrmModel.Class_Model['properties'];
    /**
     * @description all key field properties
     */
    get keyPropertyNames(): string[]; /**
     * @description all key field properties
     */
    get keyPropertyList(): FxOrmModel.ModelProperty[];
    get keys(): string[];
    get noKeys(): boolean;
    orm: FxOrmModel.Class_Model['orm'];
    get storeType(): FxDbDriverNS.DriverType;
    private get dbdriver();
    get _symbol(): symbol;
    get $dml(): FxOrmModel.Class_Model['$dml'];
    get $ddl(): FxOrmModel.Class_Model['$ddl'];
    get schemaBuilder(): any;
    get queryBuilder(): any;
    get sqlQuery(): FxSqlQuery.Class_Query;
    checkExistenceWhenNoKeys: FxOrmModel.Class_Model['checkExistenceWhenNoKeys'];
    get propertyContext(): {
        model: FxOrmModel.Class_Model;
        sqlQuery: FxOrmModel.Class_Model['sqlQuery'];
        knex: KnexInstance;
    };
    constructor(config: FxOrmModel.Class_ModelConstructOptions);
    isPropertyName(name: string): boolean;
    isAssociationName(name: string): boolean;
    isInstance(input: any): input is FxOrmInstance.Class_Instance;
    prop(propname: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['prop']>): ReturnType<FxOrmModel.Class_Model['prop']>;
    assoc(assocname: string): ReturnType<FxOrmModel.Class_Model['assoc']>;
    sync(): void;
    drop(): void;
    hasPropertyRemotely(property: string | FxOrmProperty.Class_Property): boolean;
    New(input: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['New']>): any;
    create(kvItem: Fibjs.AnyObject | Fibjs.AnyObject[]): any;
    remove(opts?: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['remove']>): number;
    clear(): void;
    normalizePropertiesToData(inputdata?: Fibjs.AnyObject, target?: Fibjs.AnyObject): FIBJS.GeneralObject;
    normalizeDataSetToWhere(dataset: Fibjs.AnyObject, target?: Fibjs.AnyObject): FIBJS.GeneralObject;
    normalizeDataByProperties(storeData?: Fibjs.AnyObject, opts?: FxOrmTypeHelpers.SecondParameter<FxOrmModel.Class_Model['normalizeDataByProperties']>): FIBJS.GeneralObject;
    pickPropertyData(dataset?: Fibjs.AnyObject, kvs?: Fibjs.AnyObject): FIBJS.GeneralObject;
    pickIdPropertyData(dataset?: Fibjs.AnyObject, kvs?: Fibjs.AnyObject): FIBJS.GeneralObject;
    pickAssociationData(dataset?: Fibjs.AnyObject, refs?: Fibjs.AnyObject): FIBJS.GeneralObject;
    filterOutAssociatedData(dataset?: Fibjs.AnyObject): {
        association: FxOrmModel.Class_MergeModel;
        dataset: any;
    }[];
    addProperty(name: string, propDef: FxOrmTypeHelpers.SecondParameter<FxOrmModel.Class_Model['addProperty']>): FxOrmModel.ModelProperty | Property<any>;
    fieldInfo(propertyName: string): {
        type: "self";
        property: FxOrmModel.ModelProperty;
        association?: undefined;
    } | {
        type: "association";
        association: FxOrmModel.Class_MergeModel;
        property?: undefined;
    };
    defineAssociation(opts: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['defineAssociation']>): FxOrmModel.Class_MergeModel;
    hasOne(...args: FxOrmTypeHelpers.Parameters<FxOrmModel.Class_Model['hasOne']>): any;
    extendsTo(...args: FxOrmTypeHelpers.Parameters<FxOrmModel.Class_Model['extendsTo']>): any;
    hasMany(...args: FxOrmTypeHelpers.Parameters<FxOrmModel.Class_Model['hasMany']>): any;
    hasManyExclusively(...args: FxOrmTypeHelpers.Parameters<FxOrmModel.Class_Model['hasManyExclusively']>): any;
    belongsToMany(...args: FxOrmTypeHelpers.Parameters<FxOrmModel.Class_Model['belongsToMany']>): any;
}
export default Model;
