/// <reference types="@fiborm/orm-core" />

import type { FxDbDriverNS } from "../../../db-driver";
import type { FxOrmCoreCallbackNS } from "../../../orm-core";
import type { FibOrmSqlDDLSync__Column } from "./Column";
import type { FibOrmSqlDDLSync__Dialect } from "./Dialect";
import type { FibOrmSqlDDLSync__DbIndex } from "./DbIndex";

export namespace FibOrmSqlDDLSync__Driver {
    export interface CustomPropertyType<ConnType = any> {
        datastoreType(
            prop?: FibOrmSqlDDLSync__Column.Property,
            opts?: {
                collection: string
                driver: FxDbDriverNS.Driver<ConnType>
            }
        ): string
        valueToProperty?(value?: any, prop?: any): any
        propertyToValue?(value?: any, prop?: any): any

        [ext_cfg_name: string]: any
    }

    export interface CustomPropertyTypeHash {
        [key: string]: CustomPropertyType
    }
    /**
     * @description one protocol driver should implement
     */    
    export interface Driver<ConnType = any> extends FxDbDriverNS.Driver<ConnType> {
        dialect: FibOrmSqlDDLSync__Dialect.DialectType

        /**
         * @description sync table/collection
         */
        sync: {
            <T = any>(): T
            <T = any>(cb: FxOrmCoreCallbackNS.ExecutionCallback<T>): void
        }
        
        /**
         * @description drop table/collection
         */
        drop: {
            <T = any>(): T
            <T = any>(cb: FxOrmCoreCallbackNS.ExecutionCallback<T>): void
        }

        customTypes?: {
            [type_name: string]: CustomPropertyType
        }
    }

    export interface DbIndexInfo_MySQL extends FibOrmSqlDDLSync__DbIndex.DbIndexInfo {
        index_name: string
        column_name: string

        non_unique: number|boolean
    }

    export interface DbIndexInfo_SQLite extends FibOrmSqlDDLSync__DbIndex.DbIndexInfo {
        unique: boolean
    }
}