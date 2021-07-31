import type { FxDbDriverNS } from "../../db-driver";
import type { FxOrmSqlDDLSync } from "./@types";
import type { FxOrmSqlDDLSync__Collection } from "./@types/Collection";
import type { FxOrmSqlDDLSync__Column } from "./@types/Column";
export declare function logJson(group: string, detail: any): string;
export declare function getSqlQueryDialect(type: FxDbDriverNS.DriverType): FxSqlQueryDialect.Dialect;
export declare function arraify<T = any>(item: T | T[]): T[];
export declare function getCollectionMapsTo_PropertyNameDict(collection: FxOrmSqlDDLSync__Collection.Collection): {
    [k: string]: string;
};
export declare function filterPropertyDefaultValue(property: FxOrmSqlDDLSync__Column.Property, ctx: {
    collection: string;
    property: FxOrmSqlDDLSync__Column.Property;
    driver: FxDbDriverNS.Driver;
}): any;
export declare function filterSyncStrategy(strategy: FxOrmSqlDDLSync.SyncCollectionOptions['strategy']): "soft" | "hard" | "mixed";
export declare function filterSuppressColumnDrop(suppressColumnDrop: boolean, db_type: FxOrmSqlDDLSync.Sync['dbdriver']['type']): boolean;
