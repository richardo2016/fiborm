/// <reference types="@fibjs/types" />
import type { FxDbDriverNS } from '@fiborm/db-driver';
import type { FxOrmDML } from '../../@types/DML';
import { FxOrmTypeHelpers } from '../../@types/_common';
import KnexBased from './_knex';
declare class DML_MySQL extends KnexBased<Class_MySQL> implements FxOrmDML.DMLDialect<Class_MySQL> {
    dbdriver: FxDbDriverNS.SQLDriver;
    clear(collection: FxOrmTypeHelpers.FirstParameter<FxOrmDML.DMLDialect<Class_MySQL>['clear']>, { connection }: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect<Class_MySQL>['clear']>): any;
}
export default DML_MySQL;
