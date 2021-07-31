/// <reference types="@fibjs/types" />
/// <reference types="@fiborm/orm-core" />
/// <reference types="@fiborm/db-driver" />

import { FxDbDriverNS } from "../../../db-driver";
import { FxOrmCoreCallbackNS } from "../../../orm-core";
import { FxOrmSqlDDLSync__Collection } from "./Collection";
import { FxOrmSqlDDLSync__Column } from "./Column";
import { FxOrmSqlDDLSync__DbIndex } from "./DbIndex";
import { FxOrmSqlDDLSync__Driver } from "./Driver";
import { FxOrmSqlDDLSync__Dialect } from "./Dialect";

export namespace FxOrmSqlDDLSync {
    export type TableName = string
    export type ColumnName = string
    
    export interface SyncOptions<ConnType = any> {
        dbdriver: FxDbDriverNS.Driver<ConnType>
        debug?: Function | false
        /**
         * @default true
         */
        suppressColumnDrop?: boolean
        syncStrategy?: FxOrmSqlDDLSync.SyncCollectionOptions['strategy']
    }
    export interface SyncResult {
        changes: number
    }
    export interface SyncCollectionOptions {
        columns?: FxOrmSqlDDLSync__Column.PropertyHash,
        strategy?: 'soft' | 'hard' | 'mixed'
        /**
         * @default true
         */
        suppressColumnDrop?: boolean
    }

    export declare class Sync<ConnType = any> {
        strategy: FxOrmSqlDDLSync.SyncCollectionOptions['strategy'];
        
        constructor (options: FxOrmSqlDDLSync.SyncOptions<ConnType>)
        
        // readonly collections: FxOrmSqlDDLSync__Collection.Collection[]
        readonly dbdriver: FxDbDriverNS.Driver<ConnType>
        readonly Dialect: FxOrmSqlDDLSync__Dialect.Dialect
        readonly types: FxOrmSqlDDLSync__Driver.CustomPropertyTypeHash

        defineCollection (collection_name: string, properties: FxOrmSqlDDLSync__Collection.Collection['properties']): this
        findCollection (collection_name: string): FxOrmSqlDDLSync__Collection.Collection
        defineType (type: string, proto: FxOrmSqlDDLSync__Driver.CustomPropertyType): this

        /**
         * @description
         *  create collection in db if it doesn't exist, then sync all columns for it.
         * 
         * @param collection collection relation to create 
         */
        createCollection<T = any> (collection: FxOrmSqlDDLSync__Collection.Collection): T
        
        getCollectionIndexes (
            collection: FxOrmSqlDDLSync__Collection.Collection
        ): FxOrmSqlDDLSync__DbIndex.DbIndexInfo[]
        /**
         * @description
         *  compare/diff properties between definition ones and the real ones,
         *  then sync column in definition but missing in the real
         * 
         * @param collection collection properties user provided 
         * @param opts
         *      - opts.columns: properties from user(default from db)
         *      - opts.strategy: (default soft) strategy when conflict between local and remote db, see details below
         * 
         * @strategy
         *      - 'soft': no change
         *      - 'mixed': add missing columns, but never change existed column in db
         *      - 'hard': modify existed columns in db
         */
        syncCollection (
            collection: string | FxOrmSqlDDLSync__Collection.Collection,
            opts?: SyncCollectionOptions
        ): void

        syncIndexes (
            collection_name: string,
            indexes: FxOrmSqlDDLSync__DbIndex.DbIndexInfo[]
        ): void

        needDefinitionToColumn (
            property: FxOrmSqlDDLSync__Column.Property,
            column: FxOrmSqlDDLSync__Column.Property,
            options?: {
                collection?: string
            }
        ): boolean

        /**
         * @description
         *  sync all collections to db (if not existing), with initializing ones' properties.
         * 
         * @callbackable
         */
        sync: {
            (cb: FxOrmCoreCallbackNS.ExecutionCallback<SyncResult>): void
            (): SyncResult
        }
        /**
         * @description
         *  sync all collections to db whatever it existed,
         *  with sync ones' properties whatever the property existed.
         * 
         * @callbackable
         */
        forceSync: Sync['sync']

        [ext: string]: any
    }

    export interface ExportModule {
        dialect(name: FxOrmSqlDDLSync__Dialect.DialectType): FxOrmSqlDDLSync__Dialect.Dialect
        Sync: typeof Sync
    }
}