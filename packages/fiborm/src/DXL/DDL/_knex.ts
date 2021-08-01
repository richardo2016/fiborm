import Base from "./_base";
import { configurable } from "../../Decorators/accessor";

import type { FxDbDriverNS } from "@fiborm/db-driver";
import type { FxOrmTypeHelpers } from "../../@types/_common";
import type { FxOrmDDL } from "../../@types/DDL";

class DDL_KnexBased<ConnType= any> extends Base<ConnType> {
    dbdriver: FxDbDriverNS.SQLDriver;

    @configurable(false)
    get isDebug () {
        return false
    }

    // createCollection (collection: string) { return null as any }

    dropCollection (...args: FxOrmTypeHelpers.Parameters<FxOrmDDL.DDLDialect['dropCollection']>) {
        const [collection, opts] = args
        const { connection = this.connection } = opts || {}
        
        const kq = this.sqlQuery
            .knex.schema
            .dropTableIfExists(collection)
        
        this.execSqlQuery(connection, kq.toString());

        return true;
    }
}

export default DDL_KnexBased
