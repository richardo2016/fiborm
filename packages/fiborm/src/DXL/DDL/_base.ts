import type { FxDbDriverNS } from '@fiborm/db-driver';
import type { FxSqlQuery } from '@fiborm/sql-query';
import type { FxOrmDDL } from '../../@types/DDL';
import type { FxOrmTypeHelpers } from '../../@types/_common';

import DXLBase from '../Base.class';

export default class Base<ConnType = any> extends DXLBase<ConnType> implements FxOrmDDL.DDLDialect<ConnType> {
    dbdriver: FxDbDriverNS.Driver<ConnType>;

    sqlQuery: FxSqlQuery.Class_Query;

    /**
     * @description find items from remote endpoints
     */
    createCollection (...args: FxOrmTypeHelpers.Parameters<FxOrmDDL.DDLDialect['createCollection']>): any {}
    alertCollection (...args: FxOrmTypeHelpers.Parameters<FxOrmDDL.DDLDialect['alertCollection']>): any {}
    truncateCollection (...args: FxOrmTypeHelpers.Parameters<FxOrmDDL.DDLDialect['truncateCollection']>): any {}
    commentCollection (...args: FxOrmTypeHelpers.Parameters<FxOrmDDL.DDLDialect['commentCollection']>): any {}
    dropCollection (...args: FxOrmTypeHelpers.Parameters<FxOrmDDL.DDLDialect['dropCollection']>): any {}
    renameCollection (...args: FxOrmTypeHelpers.Parameters<FxOrmDDL.DDLDialect['renameCollection']>): any {}
}
