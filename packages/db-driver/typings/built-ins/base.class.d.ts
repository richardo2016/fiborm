import type { FxDbDriverNS } from "../type";
import type { FxOrmCoreCallbackNS } from "@fiborm/orm-core";
export declare class Driver<CONN_TYPE = any> implements FxDbDriverNS.Driver<CONN_TYPE> {
    static getDriver: (name: FxDbDriverNS.DriverType | string) => any;
    static create(input: FxDbDriverNS.ConnectionInputArgs | string): any;
    uid: FxDbDriverNS.Driver['uid'];
    get uri(): string;
    config: FxDbDriverNS.Driver['config'];
    extend_config: FxDbDriverNS.Driver['extend_config'];
    type: FxDbDriverNS.Driver['type'];
    connection: FxDbDriverNS.Driver<CONN_TYPE>['connection'];
    pool: FxDbDriverNS.Driver<CONN_TYPE>['pool'];
    get isPool(): boolean;
    get isSql(): boolean;
    get isNoSql(): boolean;
    get isCommand(): boolean;
    constructor(options: FxDbDriverNS.ConnectionInputArgs | string);
    /**
     * @override
     */
    reopen(): CONN_TYPE;
    /**
     * @override
     */
    open(): CONN_TYPE;
    /**
     * @override
     */
    close(): void;
    /**
     * @override
     */
    ping(): void;
    /**
     * @override
     */
    getConnection(): CONN_TYPE;
    connectionPool(callback: (connection: CONN_TYPE) => any): any;
    useTrans(callback: (conn_for_trans: CONN_TYPE) => any): any;
    [sync_method: string]: any;
}
export declare class SQLDriver<CONN_TYPE> extends Driver<CONN_TYPE> implements FxDbDriverNS.SQLDriver {
    currentDb: FxDbDriverNS.SQLDriver['currentDb'];
    switchDb(targetDb: string): void;
    /**
     * @override
     */
    begin(): void;
    /**
     * @override
     */
    commit(): void;
    /**
     * @override
     */
    trans<T>(cb: FxOrmCoreCallbackNS.ExecutionCallback<T>): boolean;
    /**
     * @override
     */
    rollback(): void;
    execute<T>(sql: string): T;
}
