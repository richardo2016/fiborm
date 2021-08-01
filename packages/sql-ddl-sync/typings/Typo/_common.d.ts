import type { FxDbDriverNS } from "@fiborm/db-driver";
import type { FibOrmSqlDDLSync__Column } from "./Column";
export declare namespace FibOrmSqlDDLSync {
    type TableName = string;
    type ColumnName = string;
    interface SyncOptions<ConnType = any> {
        dbdriver: FxDbDriverNS.Driver<ConnType>;
        debug?: Function | false;
        /**
         * @default true
         */
        suppressColumnDrop?: boolean;
        syncStrategy?: FibOrmSqlDDLSync.SyncCollectionOptions['strategy'];
    }
    interface SyncResult {
        changes: number;
    }
    interface SyncCollectionOptions {
        columns?: FibOrmSqlDDLSync__Column.PropertyHash;
        strategy?: 'soft' | 'hard' | 'mixed';
        /**
         * @default true
         */
        suppressColumnDrop?: boolean;
    }
}
