import { FxSqlQueryDialect } from '@fiborm/sql-query';
import type { FxDbDriverNS } from "../../db-driver";
import type { FibOrmSqlDDLSync } from "./@types";
import type { FibOrmSqlDDLSync__Collection } from "./@types/Collection";
import type { FibOrmSqlDDLSync__Column } from "./@types/Column";
export declare function logJson(group: string, detail: any): string;
export declare function getSqlQueryDialect(type: FxDbDriverNS.DriverType): FxSqlQueryDialect.Dialect;
export declare function arraify<T = any>(item: T | T[]): T[];
export declare function getCollectionMapsTo_PropertyNameDict(collection: FibOrmSqlDDLSync__Collection.Collection): {
    [k: string]: string;
};
export declare function filterPropertyDefaultValue(property: FibOrmSqlDDLSync__Column.Property, ctx: {
    collection: string;
    property: FibOrmSqlDDLSync__Column.Property;
    driver: FxDbDriverNS.Driver;
}): any;
export declare function filterSyncStrategy(strategy: FibOrmSqlDDLSync.SyncCollectionOptions['strategy']): "soft" | "hard" | "mixed";
export declare function filterSuppressColumnDrop(suppressColumnDrop: boolean, db_type: FibOrmSqlDDLSync.Sync['dbdriver']['type']): boolean;
