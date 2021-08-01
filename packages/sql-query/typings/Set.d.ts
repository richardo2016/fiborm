import { FxSqlQueryDialect } from './Typo/Dialect';
import { FxSqlQueryChainBuilder } from './Typo/Query-ChainBuilder';
import { FxSqlQuerySql } from './Typo/Sql';
import type { KnexNS } from '@fiborm/knex';
export declare function build(knexQueryBuilder: KnexNS.QueryBuilder, Dialect: FxSqlQueryDialect.Dialect, set: FxSqlQuerySql.DataToSet, opts: FxSqlQueryChainBuilder.ChainBuilderOptions): void;
