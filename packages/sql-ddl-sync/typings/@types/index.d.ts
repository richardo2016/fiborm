import { FxDbDriverNS } from "@fiborm/db-driver";
import { FxOrmCoreCallbackNS } from "@fiborm/orm-core";
import { FibOrmSqlDDLSync__Collection } from "./Collection";
import { FibOrmSqlDDLSync__Column } from "./Column";
import { FibOrmSqlDDLSync__DbIndex } from "./DbIndex";
import { FibOrmSqlDDLSync__Driver } from "./Driver";
import { FibOrmSqlDDLSync__Dialect } from "./Dialect";
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
    class Sync<ConnType = any> {
        strategy: FibOrmSqlDDLSync.SyncCollectionOptions['strategy'];
        constructor(options: FibOrmSqlDDLSync.SyncOptions<ConnType>);
        readonly dbdriver: FxDbDriverNS.Driver<ConnType>;
        readonly Dialect: FibOrmSqlDDLSync__Dialect.Dialect;
        readonly types: FibOrmSqlDDLSync__Driver.CustomPropertyTypeHash;
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
        getCollectionIndexes(collection: FibOrmSqlDDLSync__Collection.Collection): FibOrmSqlDDLSync__DbIndex.DbIndexInfo[];
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
        syncCollection(collection: string | FibOrmSqlDDLSync__Collection.Collection, opts?: SyncCollectionOptions): void;
        syncIndexes(collection_name: string, indexes: FibOrmSqlDDLSync__DbIndex.DbIndexInfo[]): void;
        needDefinitionToColumn(property: FibOrmSqlDDLSync__Column.Property, column: FibOrmSqlDDLSync__Column.Property, options?: {
            collection?: string;
        }): boolean;
        /**
         * @description
         *  sync all collections to db (if not existing), with initializing ones' properties.
         *
         * @callbackable
         */
        sync: {
            (cb: FxOrmCoreCallbackNS.ExecutionCallback<SyncResult>): void;
            (): SyncResult;
        };
        /**
         * @description
         *  sync all collections to db whatever it existed,
         *  with sync ones' properties whatever the property existed.
         *
         * @callbackable
         */
        forceSync: Sync['sync'];
        [ext: string]: any;
    }
    interface ExportModule {
        dialect(name: FibOrmSqlDDLSync__Dialect.DialectType): FibOrmSqlDDLSync__Dialect.Dialect;
        Sync: typeof Sync;
    }
}
