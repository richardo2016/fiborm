import type { FibOrmSqlDDLSync__Collection } from "./Typo/Collection";
import type { FibOrmSqlDDLSync__Column } from "./Typo/Column";
import type { FibOrmSqlDDLSync__DbIndex } from "./Typo/DbIndex";
import type { FibOrmSqlDDLSync__Dialect } from "./Typo/Dialect";
import type { FibOrmSqlDDLSync__Driver } from "./Typo/Driver";
import type { FibOrmSqlDDLSync } from "./Typo/_common";
export { FibOrmSqlDDLSync, FibOrmSqlDDLSync__Collection, FibOrmSqlDDLSync__Column, FibOrmSqlDDLSync__Dialect, FibOrmSqlDDLSync__Driver, FibOrmSqlDDLSync__DbIndex, };
export import Dialects = require('./Dialects');
import type { FxOrmCoreCallbackNS } from '@fiborm/orm-core';
import { FxDbDriverNS } from "@fiborm/db-driver";
export declare function dialect(name: FibOrmSqlDDLSync__Dialect.DialectType): FibOrmSqlDDLSync__Dialect.Dialect;
export declare class Sync<ConnType = any> {
    strategy: FibOrmSqlDDLSync.SyncCollectionOptions['strategy'];
    /**
     * @description total changes count in this time `Sync`
     * @deprecated
     */
    total_changes: number;
    readonly collections: FibOrmSqlDDLSync__Collection.Collection[];
    readonly dbdriver: FxDbDriverNS.Driver<ConnType>;
    readonly Dialect: FibOrmSqlDDLSync__Dialect.Dialect;
    /**
     * @description customTypes
     */
    readonly types: FibOrmSqlDDLSync__Driver.CustomPropertyTypeHash;
    private suppressColumnDrop;
    private debug;
    constructor(options: FibOrmSqlDDLSync.SyncOptions<ConnType>);
    [sync_method: string]: any;
    defineCollection(collection_name: string, properties: FibOrmSqlDDLSync__Collection.Collection['properties']): this;
    findCollection(collection_name: string): FibOrmSqlDDLSync__Collection.Collection;
    defineType(type: string, proto: FibOrmSqlDDLSync__Driver.CustomPropertyType): this;
    /**
     * @description
     *  create collection in db if it doesn't exist, then sync all columns for it.
     *
     * @param collection collection relation to create
     */
    createCollection<T = any>(collection: FibOrmSqlDDLSync__Collection.Collection): T;
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
    syncCollection(_collection: string | FibOrmSqlDDLSync__Collection.Collection, opts?: FibOrmSqlDDLSync.SyncCollectionOptions): void;
    /**
     *
     * @param collection collection relation to find its indexes
     */
    getCollectionIndexes(collection: FibOrmSqlDDLSync__Collection.Collection): FibOrmSqlDDLSync__DbIndex.DbIndexInfo[];
    syncIndexes(collection_name: string, indexes: FibOrmSqlDDLSync__DbIndex.DbIndexInfo[]): void;
    /**
     * @description
     *  sync all collections to db (if not existing), with initializing ones' properties.
     *
     * @callbackable
     */
    sync(cb: FxOrmCoreCallbackNS.ExecutionCallback<FibOrmSqlDDLSync.SyncResult>): void;
    sync(): FibOrmSqlDDLSync.SyncResult;
    /**
     * @description
     *  sync all collections to db whatever it existed,
     *  with sync ones' properties whatever the property existed.
     *
     * @callbackable
     */
    forceSync(cb: FxOrmCoreCallbackNS.ExecutionCallback<FibOrmSqlDDLSync.SyncResult>): void;
    forceSync(): FibOrmSqlDDLSync.SyncResult;
    /**
     * @description if sync one column
     *
     * @param property existed property in collection
     * @param column column expected to be synced
     */
    needDefinitionToColumn(property: FibOrmSqlDDLSync__Column.Property, column: FibOrmSqlDDLSync__Column.Property, options?: {
        collection?: string;
    }): boolean;
}
