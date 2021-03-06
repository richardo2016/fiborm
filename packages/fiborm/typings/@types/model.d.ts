/// <reference types="@fibjs/types" />
import type { FxSqlQuery } from '@fiborm/sql-query';
import type { KnexInstance } from "@fiborm/knex";
import type { FxOrmDDL } from "./DDL";
import type { FxOrmDML } from "./DML";
import type { FxOrmDXL } from "./DXL";
import type { FxOrmInstance } from "./instance";
import type { Class_ORM } from "./ORM";
import { FxOrmProperty } from "./property";
import { FxOrmQueries } from "./Queries";
import { FxOrmValidators } from "./Validators";
import type { FxOrmTypeHelpers } from "./_common";
export declare namespace FxOrmModel {
    interface Class_ModelDefinitionOptions {
        collection?: Class_ModelConstructOptions['collection'];
        indexes?: Class_ModelConstructOptions['indexes'];
        keys?: Class_ModelConstructOptions['keys'];
        howToCheckExistenceWhenNoKeys?: Class_ModelConstructOptions['howToCheckExistenceWhenNoKeys'];
        autoSave?: boolean;
        autoFetch?: boolean;
        cascadeRemove?: boolean;
    }
    type Class_ModelConstructOptions = FxOrmTypeHelpers.ConstructorParams<typeof FxOrmModel.Class_Model>[0];
    type ModelProperty = FxOrmProperty.Class_Property<Class_Model['propertyContext']>;
    class Class_Model extends FxOrmQueries.Class_QueryBuilder {
        name: string;
        collection: string;
        readonly orm: Class_ORM;
        properties: {
            [k: string]: ModelProperty;
        };
        readonly propertyNames: string[];
        readonly propertyList: ModelProperty[];
        readonly associationNames: string[];
        /**
         * @notice all instance refered by associations is just instance of merge model, not target model
         */
        readonly associations: {
            [k: string]: FxOrmModel.Class_MergeModel;
        };
        readonly associationDefinitions: {
            [k: string]: ((sourceModel: FxOrmModel.Class_Model) => FxOrmModel.Class_MergeModel);
        };
        settings: any;
        readonly storeType: ModelProperty['$storeType'];
        readonly isMergeModel: boolean;
        /**
         * @description if this model has no key
         * @default false
         */
        readonly noKeys: boolean;
        /**
         * @description id property name
         */
        readonly id: string;
        /**
         * @description all id-type field property names
         */
        readonly ids: string[];
        /**
         * @description all id-type field properties
         */
        readonly idPropertyList: ModelProperty[];
        readonly keyPropertyNames: string[];
        readonly keyPropertyList: ModelProperty[];
        readonly keys: string[];
        readonly _symbol: Symbol;
        readonly $dml: FxOrmDML.DMLDialect;
        readonly $ddl: FxOrmDDL.DDLDialect;
        readonly schemaBuilder: KnexInstance['schema'];
        readonly queryBuilder: FxOrmTypeHelpers.ReturnType<KnexInstance['queryBuilder']>;
        readonly sqlQuery: FxSqlQuery.Class_Query;
        readonly checkExistenceWhenNoKeys?: (payload: {
            instance: FxOrmInstance.Class_Instance;
        }) => boolean;
        readonly propertyContext: {
            model: FxOrmModel.Class_Model;
            sqlQuery: FxOrmDML.DMLDialect<any>['sqlQuery'];
            knex: FxOrmDXL.DXLDialect<any>['sqlQuery']['knex'];
        };
        constructor(config: {
            name: string;
            orm: Class_ORM;
            settings: any;
            collection: string;
            properties: FxOrmProperty.NormalizedPropertyHash;
            indexes?: string[];
            /**
             * @description above priorities of properties' specification
             *
             * if keys === false, all properties are not key
             */
            keys?: string[] | false;
            howToCheckExistenceWhenNoKeys?: FxOrmModel.Class_Model['checkExistenceWhenNoKeys'];
            autoSave?: boolean;
            autoFetch?: boolean;
            cascadeRemove?: boolean;
            methods?: {
                [method_name: string]: Function;
            };
            validations?: FxOrmValidators.IValidatorHash;
        });
        isPropertyName(name: string): boolean;
        isAssociationName(name: string): boolean;
        /**
         * @description check if input is instanceof THIS model
         * @param input
         */
        isInstance(input: any): input is FxOrmInstance.Class_Instance;
        prop(propertyname: string | FxOrmProperty.Class_Property): Class_Model['properties'][any];
        assoc(propertyname: string): Class_Model['associations'][any];
        /**
         * @description create one instance from data input
         *
         * if input is just one instance, New() would create the new one rather than use old one
         *
         * @param input dataset for create one instance
         */
        New: FxOrmTypeHelpers.FuncReturnArrayOrItEleViaArgIdx0<(input: (Fibjs.AnyObject | string | number)) => FxOrmInstance.Class_Instance>;
        /**
         * @description sync collection definition to remote endpoint
         */
        sync(): void;
        /**
         * @description drop collection from remote endpoint
         */
        drop(): void;
        /**
         * @description is property existed in remote endpoint
         * @warn only valid in sql-type dbdriver
         */
        hasPropertyRemotely(property: string | ModelProperty): boolean;
        /**
         * @description create one instance from this model
         */
        create: FxOrmTypeHelpers.FuncReturnArrayOrItEleViaArgIdx0<(kvItem: Fibjs.AnyObject, opts?: {
            parallel?: boolean;
        }) => FxOrmInstance.Class_Instance>;
        /**
         * @description remove items corresponding to conditions
         *
         * @param opts.where
         *
         * @return remove count
         */
        remove(opts?: {
            where: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect['find']>['where'];
        }): number;
        /**
         * @description clear all data in remote endpoints
         */
        clear(): void;
        /**
         * @description
         *  filter out properties-about key-value in dataset only,
         *  and transform [key] to correspoding `mapsTo` field in property
         */
        normalizeDataByProperties(dataset: Fibjs.AnyObject, opts?: {
            onPropertyField?: (payload: {
                origValue: any;
                transformedValue: any;
                fieldname: string;
                mapsTo: string;
            }) => void;
            onAssociationField?: (payload: {
                origValue: any;
                transformedValue: any;
                fieldname: string;
            }) => void;
        }): Record<keyof any, any>;
        /**
         * @description
         *  filter out properties-about key-value in datastore only,
         *  and transform [key] to correspoding `name` field in property
         */
        normalizePropertiesToData(datastore: Fibjs.AnyObject, target?: Fibjs.AnyObject): Record<keyof any, any>;
        /**
         * @description
         *  filter out properties-about key-value in `mixed` only,
         *  and transform [key] to correspoding `name` field in property
         */
        pickPropertyData(mixed: Fibjs.AnyObject, target?: Fibjs.AnyObject): Record<keyof any, any>;
        /**
         * @description
         * similar with `pickPropertyData`, but only pick id properties
         */
        pickIdPropertyData(mixed: Fibjs.AnyObject, target?: Fibjs.AnyObject): Record<keyof any, any>;
        /**
         * @description
         *  filter out association-about key-value in `mixed` only,
         *  and transform [key] to correspoding `name` field in property
         */
        pickAssociationData(mixed: Fibjs.AnyObject, target?: Fibjs.AnyObject): Record<keyof any, any>;
        /**
         * @description
         *  normalize data set to where conditions, just normalize key in dataset, never change anything of
         *  any field's value. On the other hand, if passed key in dataset is one full table-column indetifier,
         *  such as `table1.col1`, it would'nt changed ---- sometimes user want keep it, like when result of
         *  `normalizeDataSetToWhere` were used for join-on conditions
         *
         * @return []
         */
        normalizeDataSetToWhere(dataset: Fibjs.AnyObject, target?: Fibjs.AnyObject): Record<keyof any, any>;
        /**
         * @description
         *  filter out association-about key-value in dataset only,
         *  if no key-value about association, would return one empty array
         *
         * @return []
         */
        filterOutAssociatedData(dataset: Fibjs.AnyObject): {
            association: FxOrmModel.Class_Model['associations'][any];
            dataset: any;
        }[];
        addProperty(name: string, propertyDefinition: ConstructorParameters<typeof FxOrmProperty.Class_Property>[0], opts?: Omit<ConstructorParameters<typeof FxOrmProperty.Class_Property>[1], 'propertyName' | 'storeType' | '$ctx'>): ModelProperty;
        fieldInfo(propertyName: string): {
            type: 'self';
            property: Class_Model['properties'][any];
        } | {
            type: 'association';
            association: Class_Model['associations'][any];
        } | null;
        hasOne(model: FxOrmModel.Class_Model, opts?: {
            as?: string;
        }): Class_MergeModel;
        extendsTo(properties: Fibjs.AnyObject, opts: {
            as: string;
            collection?: string;
            sourceForJoin?: string;
            joinNodeSource?: string;
        }): Class_MergeModel;
        hasMany(model: FxOrmModel.Class_Model, opts?: {
            as?: string;
            collection?: string;
            type?: 'm2m' | 'o2m';
        }): Class_MergeModel;
        /**
         * @on sourceModel.id === targetModel.[reverseAs_Key]
         */
        hasManyExclusively(model: FxOrmModel.Class_Model, opts?: {
            as?: string;
            collection?: string;
            reverseAs?: string;
        }): Class_MergeModel;
        belongsToMany(model: Class_Model, opts?: {
            as?: string;
            collection?: string;
            joinNodeSource?: string;
            sourceForJoin?: string;
            joinNodeTarget?: string;
            targetForJoin?: string;
        }): Class_MergeModel;
        defineAssociation(opts: {
            /**
             * @description target model
             */
            target: FxOrmModel.Class_Model;
            /**
             * @description association name
             */
            name: string;
            /**
             * @description merge collection name
             */
            collection: string;
            type: FxOrmModel.Class_MergeModel['type'];
            /**
             * @description: extra properties
             */
            properties?: {
                [k: string]: any;
            };
            /**
             * @description lock some properties in source/target[/merge] collection
             * as join properties, all of them MUST be non-key
             */
            defineMergeProperties: ConstructorParameters<typeof Class_MergeModel>[0]['defineMergeProperties'];
            howToCheckExistenceWhenNoKeys?: ConstructorParameters<typeof Class_Model>[0]['howToCheckExistenceWhenNoKeys'];
            /**
             * @description determine how to get id names for merge model
             */
            howToGetIdPropertyNames: ConstructorParameters<typeof Class_MergeModel>[0]['howToGetIdPropertyNames'];
            /**
             * @description determine how to check if source-model-instance HAS target-model-instance(s)
             */
            howToCheckHasForSource: ConstructorParameters<typeof Class_MergeModel>[0]['howToCheckHasForSource'];
            /**
             * @description determine how to fetch target-model-instance(s)
             */
            howToFetchForSource: ConstructorParameters<typeof Class_MergeModel>[0]['howToFetchForSource'];
            /**
             * @description determine how to save target-model-instance(s) for source-model-instance
             */
            howToSaveForSource: ConstructorParameters<typeof Class_MergeModel>[0]['howToSaveForSource'];
            /**
             * @description determine how to unlink target-model-instance(s) from source-model-instance
             */
            howToUnlinkForSource: ConstructorParameters<typeof Class_MergeModel>[0]['howToUnlinkForSource'];
            /**
             * @description determine actions when findBy target-model-instance(s)
             */
            onFindByRef: ConstructorParameters<typeof Class_MergeModel>[0]['onFindByRef'];
        }): Class_MergeModel;
    }
    /**
     * @description generated on building association
     */
    class Class_MergeModel extends Class_Model {
        /**
         * @description association name
         */
        name: string;
        /**
         * @description association type
         */
        type: 'o2o' | 'o2m' | 'm2o' | 'm2m';
        /**
         * @description name of collection which used as association table/collection in remote endpoints
         */
        sourceModel: FxOrmModel.Class_Model;
        targetModel: FxOrmModel.Class_Model;
        /**
         * @description this is fully determined by `options.matchKeys` in constructor
         */
        readonly associationKeys: string[];
        readonly joinPropertyList: FxOrmModel.Class_MergeModel['properties'][any][];
        readonly joinKeys: string[];
        /**
         * @description
         *  association information, used to generate matching
         *  where query-conditions
         */
        associationInfo: {
            /**
             * @description merge collection
             */
            collection: string;
            howToGetIdPropertyNames(payload: {
                mergeModel: FxOrmModel.Class_MergeModel;
            }): string[];
            /**
             * @description one required easy-on conditions input
             * @see test/model-walkCondtions.js
             */
            onFindByRef: (payload: {
                mergeModel: FxOrmModel.Class_MergeModel;
                complexWhere: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['find']>['where'];
                mergeModelFindOptions?: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['find']>;
            }) => Fibjs.AnyObject;
            howToCheckHasForSource: FxOrmTypeHelpers.MergeToFunctionArgOption0<FxOrmModel.Class_MergeModel['checkHasForSource'], {
                mergeModel: FxOrmModel.Class_MergeModel;
            }>;
            howToSaveForSource: (payload: {
                mergeModel: FxOrmModel.Class_MergeModel;
            } & FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_MergeModel['saveForSource']>) => any;
            /**
             * @retrun source Instance
             */
            howToFetchForSource: (payload: {
                mergeModel: FxOrmModel.Class_MergeModel;
            } & FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_MergeModel['findForSource']>) => void;
            howToUnlinkForSource: (payload: {
                mergeModel: FxOrmModel.Class_MergeModel;
            } & FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_MergeModel['unlinkForSource']>) => any;
        };
        constructor(opts: FxOrmModel.Class_ModelConstructOptions & {
            mergeCollection: string;
            type: Class_MergeModel['type'];
            source: Class_MergeModel['sourceModel'];
            target: Class_MergeModel['targetModel'];
            defineMergeProperties: (payload: {
                sourceModel: FxOrmModel.Class_Model;
                targetModel: FxOrmModel.Class_Model;
                mergeModel: FxOrmModel.Class_MergeModel;
            }) => any;
            howToGetIdPropertyNames: FxOrmModel.Class_MergeModel['associationInfo']['howToGetIdPropertyNames'];
            howToSaveForSource: FxOrmModel.Class_MergeModel['associationInfo']['howToSaveForSource'];
            howToFetchForSource: FxOrmModel.Class_MergeModel['associationInfo']['howToFetchForSource'];
            howToUnlinkForSource: FxOrmModel.Class_MergeModel['associationInfo']['howToUnlinkForSource'];
            howToCheckHasForSource: FxOrmModel.Class_MergeModel['associationInfo']['howToCheckHasForSource'];
            onFindByRef: Class_MergeModel['associationInfo']['onFindByRef'];
        });
        isSourceModel(model: Class_Model): boolean;
        isTarget(model: Class_Model): boolean;
        checkHasForSource: (opts: {
            sourceInstance: FxOrmInstance.Class_Instance;
            targetInstances: FxOrmInstance.Class_Instance[];
        }) => {
            /**
             * @description final summary result
             */
            final: boolean;
            /**
             * @description id-existence
             */
            ids: {
                [k: string]: boolean;
            };
        };
        saveForSource(opts: {
            targetDataSet: FxOrmTypeHelpers.ItOrListOfIt<Fibjs.AnyObject | FxOrmInstance.Class_Instance>;
            sourceInstance: FxOrmInstance.Class_Instance;
            isAddOnly?: boolean;
        }): void;
        findForSource(opts: {
            sourceInstance: FxOrmInstance.Class_Instance;
            findOptions?: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['find']>;
        }): void;
        unlinkForSource(opts: {
            targetInstances: FxOrmInstance.Class_Instance[];
            sourceInstance: FxOrmInstance.Class_Instance;
        }): void;
    }
}
