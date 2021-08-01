import type { FxDbDriverNS } from "@fiborm/db-driver";
import type { FibOrmSqlDDLSync__Column } from "./Column";

export namespace FibOrmSqlDDLSync {
    export type TableName = string
    export type ColumnName = string

    export interface SyncOptions<ConnType = any> {
        dbdriver: FxDbDriverNS.Driver<ConnType>
        debug?: Function | false
        /**
         * @default true
         */
        suppressColumnDrop?: boolean
        syncStrategy?: FibOrmSqlDDLSync.SyncCollectionOptions['strategy']
    }
    export interface SyncResult {
        changes: number
    }
    export interface SyncCollectionOptions {
        columns?: FibOrmSqlDDLSync__Column.PropertyHash,
        strategy?: 'soft' | 'hard' | 'mixed'
        /**
         * @default true
         */
        suppressColumnDrop?: boolean
    }
}
