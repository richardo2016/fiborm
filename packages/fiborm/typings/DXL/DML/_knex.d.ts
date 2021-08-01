import Base from "../Base.class";
import type { FxOrmDML } from "../../@types/DML";
import type { FxOrmTypeHelpers } from "../../@types/_common";
declare class DML_KnexBased<CONN_TYPE = any> extends Base<CONN_TYPE> implements FxOrmDML.DMLDialect<CONN_TYPE> {
    get isDebug(): boolean;
    constructor(opts: FxOrmTypeHelpers.ConstructorParams<typeof Base>[0]);
    find: FxOrmDML.DMLDialect['find'];
    exists(collection: string, { connection, where }?: {
        connection?: CONN_TYPE;
        where?: any;
    }): boolean;
    count: FxOrmDML.DMLDialect['count'];
    insert: FxOrmDML.DMLDialect['insert'];
    update: FxOrmDML.DMLDialect['update'];
    remove: FxOrmDML.DMLDialect['remove'];
    clear(...args: FxOrmTypeHelpers.Parameters<FxOrmDML.DMLDialect['clear']>): any;
}
export default DML_KnexBased;
