/// <reference types="@fibjs/types" />
/// <reference types="@fibjs/enforce" />
/// <reference types="@fiborm/db-driver" />
/// <reference types="@fiborm/sql-query" />
/// <reference types="@fiborm/sql-ddl-sync" />
/// <reference types="fib-pool" />

import type { FxDbDriverNS } from "@fiborm/db-driver"
import type { FxOrmDDL } from "./DDL"
import type { FxOrmDML } from "./DML"
import type { FxOrmModel } from "./model"
import type { FxOrmProperty } from "./property"
import type { FxOrmQueries } from "./Queries"

// fix fibjs types' missing
// declare var console: any

/* next generation :start */
export declare class Class_ORM<ConnType = any> {
    static Op: FxOrmQueries.Class_QueryBuilder['Op']
    static Opf: FxOrmQueries.Class_QueryBuilder['Opf']
    static Ql: FxOrmQueries.Class_QueryBuilder['Ql']
    static Qlfn: FxOrmQueries.Class_QueryBuilder['Qlfn']

    static Property: typeof FxOrmProperty.Class_Property

    /**
     * @description create one orm, but never do any real connection
     */
    static create (connection: string | FxDbDriverNS.ConnectionInputArgs): Class_ORM

    /**
     * @description create orm and connect it
     */
    static connect (connection: string | FxDbDriverNS.DBConnectionConfig): Class_ORM

    /**
     * @description return one query normalizer
     */
    static parseHQL (
        sql: string,
        opts?: {
            models?: {
                [k: string]: FxOrmModel.Class_Model
            }
        }
    ): FxOrmQueries.HqLNormalizer

    constructor (
        driver: FxDbDriverNS.Driver<ConnType> | string | FxDbDriverNS.ConnectionInputArgs,
        opts?: {
            connection?: FxDbDriverNS.Driver<ConnType>['connection']
            ddl?: FxOrmDDL.DDLDialect<ConnType>
            dml?: FxOrmDML.DMLDialect<ConnType>
        }
    )

    driver: FxDbDriverNS.Driver<ConnType>
    connection: FxDbDriverNS.Driver<ConnType>['connection']

    settings: any

    readonly models: {[k: string]: FxOrmModel.Class_Model}
    readonly customPropertyTypes: {[k: string]: FxOrmProperty.CustomPropertyType}
    readonly modelDefinitions: {
        [k: string]: (orm: Class_ORM, ...args: any) => FxOrmModel.Class_Model
    }
    $dml: FxOrmDML.DMLDialect<ConnType>;
    $ddl: FxOrmDDL.DDLDialect<ConnType>;

    $context: Record<keyof any, any>

    /**
     * @description define one model with modelName(name) and properties(props)
     *
     * @param name
     * @param properties
     * @param config
     */
    define (
        name: string,
        properties: Fibjs.AnyObject,
        config?: FxOrmModel.Class_ModelDefinitionOptions
    ): FxOrmModel.Class_Model

    defineType (
        name: string,
        opts: {
            datastoreType: FxOrmProperty.CustomPropertyType['datastoreType'],
            valueToProperty: FxOrmProperty.CustomPropertyType['valueToProperty'],
            propertyToStoreValue: FxOrmProperty.CustomPropertyType['propertyToStoreValue']
        }
    ): FxOrmProperty.CustomPropertyType

    useTrans (callback: (orm: Class_ORM) => any): void
    /**
     * @description sync all model in this.models to remote endpoints
     */
    sync (): void
    /**
     * @description sync all model in this.models from remote endpoints
     */
    drop (): void

    close (): void
}
/* next generation :end */
