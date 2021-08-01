import FxORMCore = require("@fiborm/orm-core");
import type { FibOrmSqlDDLSync } from "./@types";
import type { FibOrmSqlDDLSync__Collection } from "./@types/Collection";
import type { FibOrmSqlDDLSync__Column } from "./@types/Column";
import type { FibOrmSqlDDLSync__Dialect } from "./@types/Dialect";
import type { FibOrmSqlDDLSync__Driver } from "./@types/Driver";
import type { FibOrmSqlDDLSync__DbIndex } from "./@types/DbIndex";
export { FibOrmSqlDDLSync, FibOrmSqlDDLSync__Collection, FibOrmSqlDDLSync__Column, FibOrmSqlDDLSync__Dialect, FibOrmSqlDDLSync__Driver, FibOrmSqlDDLSync__DbIndex, };
export import Dialects = require('./Dialects');
export declare const dialect: FibOrmSqlDDLSync.ExportModule['dialect'];
export declare class Sync<ConnType = any> implements FibOrmSqlDDLSync.Sync<ConnType> {
    strategy: FibOrmSqlDDLSync.SyncCollectionOptions['strategy'];
    /**
     * @description total changes count in this time `Sync`
     * @deprecated
     */
    total_changes: FibOrmSqlDDLSync.Sync['total_changes'];
    readonly collections: FibOrmSqlDDLSync__Collection.Collection[];
    readonly dbdriver: FibOrmSqlDDLSync.Sync['dbdriver'];
    readonly Dialect: FibOrmSqlDDLSync.Sync['Dialect'];
    /**
     * @description customTypes
     */
    readonly types: FibOrmSqlDDLSync.Sync['types'];
    private suppressColumnDrop;
    private debug;
    constructor(options: FibOrmSqlDDLSync.SyncOptions);
    [sync_method: string]: any;
    defineCollection(collection_name: string, properties: FibOrmSqlDDLSync__Collection.Collection['properties']): this;
    findCollection(collection_name: string): null | FibOrmSqlDDLSync__Collection.Collection;
    defineType(type: string, proto: FibOrmSqlDDLSync__Driver.CustomPropertyType): this;
    createCollection(collection: FibOrmSqlDDLSync__Collection.Collection): any;
    syncCollection(_collection: string | FibOrmSqlDDLSync__Collection.Collection, opts?: FibOrmSqlDDLSync.SyncCollectionOptions): void;
    /**
     *
     * @param collection collection relation to find its indexes
     */
    getCollectionIndexes(collection: FibOrmSqlDDLSync__Collection.Collection): FibOrmSqlDDLSync__DbIndex.DbIndexInfo[];
    syncIndexes(collection_name: string, indexes: FibOrmSqlDDLSync__DbIndex.DbIndexInfo[]): void;
    sync(cb?: FxORMCore.FxOrmCoreCallbackNS.ExecutionCallback<FibOrmSqlDDLSync.SyncResult>): FibOrmSqlDDLSync.SyncResult;
    forceSync(cb?: FxORMCore.FxOrmCoreCallbackNS.ExecutionCallback<FibOrmSqlDDLSync.SyncResult>): FibOrmSqlDDLSync.SyncResult;
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
