import { FxSqlQueryDialect } from '@fiborm/sql-query';
import type { FxDbDriverNS } from "@fiborm/db-driver";
import type { FibOrmSqlDDLSync } from "./Typo/_common";
import type { FibOrmSqlDDLSync__Collection } from "./Typo/Collection";
import type { FibOrmSqlDDLSync__Column } from "./Typo/Column";
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
export declare function filterSuppressColumnDrop(suppressColumnDrop: boolean, db_type: FxDbDriverNS.DriverType): boolean;
