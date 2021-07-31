/// <reference path="../src/@types/index.d.ts" />
import type { KnexNS } from '@fiborm/knex';
export declare function build(knexQueryBuilder: KnexNS.QueryBuilder, Dialect: FxSqlQueryDialect.Dialect, whereList: FxSqlQuerySubQuery.SubQueryBuildDescriptor[], opts: FxSqlQuery.ChainBuilderOptions): void;
