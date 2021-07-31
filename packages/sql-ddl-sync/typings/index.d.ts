import FxORMCore = require("@fiborm/orm-core");
import { FxOrmSqlDDLSync } from "./@types";
import { FxOrmSqlDDLSync__Collection } from "./@types/Collection";
import { FxOrmSqlDDLSync__Column } from "./@types/Column";
import { FxOrmSqlDDLSync__Driver } from "./@types/Driver";
import { FxOrmSqlDDLSync__DbIndex } from "./@types/DbIndex";
export import Dialects = require('./Dialects');
export declare const dialect: FxOrmSqlDDLSync.ExportModule['dialect'];
export declare class Sync<ConnType = any> implements FxOrmSqlDDLSync.Sync<ConnType> {
    strategy: FxOrmSqlDDLSync.SyncCollectionOptions['strategy'];
    /**
     * @description total changes count in this time `Sync`
     * @deprecated
     */
    total_changes: FxOrmSqlDDLSync.Sync['total_changes'];
    readonly collections: FxOrmSqlDDLSync__Collection.Collection[];
    readonly dbdriver: FxOrmSqlDDLSync.Sync['dbdriver'];
    readonly Dialect: FxOrmSqlDDLSync.Sync['Dialect'];
    /**
     * @description customTypes
     */
    readonly types: FxOrmSqlDDLSync.Sync['types'];
    private suppressColumnDrop;
    private debug;
    constructor(options: FxOrmSqlDDLSync.SyncOptions);
    [sync_method: string]: any;
    defineCollection(collection_name: string, properties: FxOrmSqlDDLSync__Collection.Collection['properties']): this;
    findCollection(collection_name: string): null | FxOrmSqlDDLSync__Collection.Collection;
    defineType(type: string, proto: FxOrmSqlDDLSync__Driver.CustomPropertyType): this;
    createCollection(collection: FxOrmSqlDDLSync__Collection.Collection): any;
    syncCollection(_collection: string | FxOrmSqlDDLSync__Collection.Collection, opts?: FxOrmSqlDDLSync.SyncCollectionOptions): void;
    /**
     *
     * @param collection collection relation to find its indexes
     */
    getCollectionIndexes(collection: FxOrmSqlDDLSync__Collection.Collection): FxOrmSqlDDLSync__DbIndex.DbIndexInfo[];
    syncIndexes(collection_name: string, indexes: FxOrmSqlDDLSync__DbIndex.DbIndexInfo[]): void;
    sync(cb?: FxORMCore.FxOrmCoreCallbackNS.ExecutionCallback<FxOrmSqlDDLSync.SyncResult>): FxOrmSqlDDLSync.SyncResult;
    forceSync(cb?: FxORMCore.FxOrmCoreCallbackNS.ExecutionCallback<FxOrmSqlDDLSync.SyncResult>): FxOrmSqlDDLSync.SyncResult;
    /**
     * @description if sync one column
     *
     * @param property existed property in collection
     * @param column column expected to be synced
     */
    needDefinitionToColumn(property: FxOrmSqlDDLSync__Column.Property, column: FxOrmSqlDDLSync__Column.Property, options?: {
        collection?: string;
    }): boolean;
}
