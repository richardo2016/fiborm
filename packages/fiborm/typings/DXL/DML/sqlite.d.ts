/// <reference types="@fibjs/types" />
import type { FxDbDriverNS } from '@fiborm/db-driver';
import type { FxOrmDML } from '../../@types/DML';
import type { FxOrmTypeHelpers } from '../../@types/_common';
import KnexBased from './_knex';
declare class DML_SQLite extends KnexBased<Class_SQLite> implements FxOrmDML.DMLDialect<Class_SQLite> {
    dbdriver: FxDbDriverNS.SQLDriver;
    clear(...args: FxOrmTypeHelpers.Parameters<FxOrmDML.DMLDialect['clear']>): any;
}
export default DML_SQLite;
