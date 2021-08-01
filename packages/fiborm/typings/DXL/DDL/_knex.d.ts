import Base from "./_base";
import type { FxDbDriverNS } from "@fiborm/db-driver";
import type { FxOrmTypeHelpers } from "../../@types/_common";
import type { FxOrmDDL } from "../../@types/DDL";
declare class DDL_KnexBased<ConnType = any> extends Base<ConnType> {
    dbdriver: FxDbDriverNS.SQLDriver;
    get isDebug(): boolean;
    dropCollection(...args: FxOrmTypeHelpers.Parameters<FxOrmDDL.DDLDialect['dropCollection']>): boolean;
}
export default DDL_KnexBased;
