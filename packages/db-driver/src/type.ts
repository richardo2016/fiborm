/// <reference types="@fibjs/types" />
/// <reference types="@fiborm/orm-core" />
/// <reference types="fib-pool" />

import type { FxOrmCoreCallbackNS } from "@fiborm/orm-core";

export namespace FxDbDriverNS {
    export type DriverType = 'mysql' | 'sqlite' | 'redis' | 'mongodb' | 'unknown'

    export interface ConnectionInputArgs {
        protocol?: string;
        /**
         *
         * prioty: hasOwnProperty('hostname') > host
         */
        hostname?: string;
        host?: string;
        port?: number|string;
        /**
         * if auth existed, user/password would be overwritten
         */
        auth?: string;
        username?: string;
        password?: string;

        database?: string;
        pool?: boolean | ConnectionPoolOptions;
        debug?: boolean;
        pathname?: string
        query?: Fibjs.AnyObject
        href?: string

        [extra: string]: any
    }

    export interface ConnectionPoolOptions {
        maxsize?: FibPoolNS.FibPoolOptionArgs['maxsize']
        timeout?: FibPoolNS.FibPoolOptionArgs['timeout']
        retry?: FibPoolNS.FibPoolOptionArgs['retry']
    }

    /**
     * @description plain object, not Url Object
     */
    export interface DBConnectionConfig {
        protocol: ConnectionInputArgs['protocol']
        slashes: Class_UrlObject['slashes']
        query: ConnectionInputArgs['query']
        database: ConnectionInputArgs['database']
        username: ConnectionInputArgs['username']
        password: ConnectionInputArgs['password']
        host: ConnectionInputArgs['host']

        href: ConnectionInputArgs['href']
        pathname: ConnectionInputArgs['pathname']

        [extra: string]: any
    }

    export interface DriverBuiltInExtConfig {
        pool: false | ConnectionPoolOptions
        debug: boolean
    }

    export interface DriverExtendTransaction {
        /* transaction about :start */
        begin: {
            <T=any>(): void
        };
        commit: {
            <T=any>(): void
        };
        rollback: {
            <T=any>(): void
        };
        trans: {
            <T=any>(cb: FxOrmCoreCallbackNS.ExecutionCallback<T>): boolean
        }
        /* transaction about :end */
    }

    export declare class Driver<CONN_TYPE = any> {
        static getDriver(
            name: FxDbDriverNS.DriverType | string
        ): typeof Driver
        static create<CreateCONN_TYPE = any> (options: ConnectionInputArgs | string): Driver<CreateCONN_TYPE>

        constructor (options: ConnectionInputArgs | string)

        readonly uid: string
        readonly uri: string
        readonly isPool: boolean;
        /**
         * @description whether driver is based on sql query
         */
        readonly isSql: boolean
        /**
         * @description whether driver is nosql
         */
        readonly isNoSql: boolean
        /**
         * @description whether driver is based on command
         */
        readonly isCommand: boolean

        type: DriverType
        config: DBConnectionConfig
        extend_config: Fibjs.AnyObject & DriverBuiltInExtConfig

        connection: CONN_TYPE
        pool?: FibPoolNS.FibPool<CONN_TYPE>
        
        // knex: FXJSKnex.FXJSKnexModule.KnexInstance

        /**
         * @description re open db connection
         */
        reopen: {
            (): CONN_TYPE
        }
        /**
         * @description open db connection
         */
        open: {
            (): CONN_TYPE
        }
        /**
         * @description close db connection
         */
        close: {
            (): void
        }
        /**
         * @description some db connection has `ping` method
         */
        ping: {
            (): void
        }
        /**
         * @description get connection instance but don't change internal status
         */
        getConnection (): CONN_TYPE

        connectionPool (callback: (connection: CONN_TYPE) => any): any

        useTrans<T = any> (callback: (conn_for_trans: CONN_TYPE) => T): T

        [ext_key: string]: any
    }

    export interface DriverConfig {
        database: string

        [ext_cfg_name: string]: any
    }
}

export namespace FxDbDriverNS {
    export type DriverUidType = string

    export interface QueryDataPayload {
        [key: string]: any
    }

    export interface QueriedCountDataPayload {
        c: number
    }
}

export namespace FxDbDriver__Driver_SQLShared {
    export interface SyncOptions {
        id: string[]
        table: string
    }

    export interface DropOptions {
        table: string
    }
}

export namespace FxDbDriverNS {
    export interface SQLDriver extends Driver, DriverExtendTransaction {
        currentDb: string
        switchDb (targetDb: string): void

        execute: {
            <T=any>(sql: string): T;
        }
    }

    export interface CommandDriverCommandOptions {
        parallel?: boolean
    }
    export interface CommandDriver extends Driver {
        command: {
            <T=any>(cmd: string, ...args: any[]): T;
        }
        commands: {
            <T=any>(cmds: Fibjs.AnyObject, opts?: CommandDriverCommandOptions): T;
        }
    }

    export interface ServiceDriver extends Driver {
        /**
         * @description is this service support rest api
         * @sample elasticsearch, tdengine
         */
        readonly isRest: boolean
    }
}