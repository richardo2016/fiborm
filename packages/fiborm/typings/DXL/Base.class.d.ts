import type { FxSqlQuery } from '@fiborm/sql-query';
import type { FxOrmDXL } from '../@types/DXL';
import type { FxOrmTypeHelpers } from '../@types/_common';
export default class DXLBase<ConnType = any> implements FxOrmDXL.DXLDialect<ConnType> {
    dialect: FxOrmDXL.DXLDialect<ConnType>['dialect'];
    connection: FxOrmDXL.DXLDialect<ConnType>['connection'];
    sqlQuery: FxSqlQuery.Class_Query;
    constructor(opts: FxOrmTypeHelpers.ConstructorParams<typeof FxOrmDXL.DXLDialect>[0]);
    fromNewConnection(connection: FxOrmTypeHelpers.FirstParameter<FxOrmDXL.DXLDialect<ConnType>['fromNewConnection']>): any;
    execSqlQuery<T_RESULT = any>(connection: any, sqlstr: string, args?: any[]): T_RESULT;
}
