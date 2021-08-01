import { FxSqlQuerySubQuery } from './Typo/SubQuery';
import { FxSqlQueryDialect } from './Typo/Dialect';
import { FxSqlQueryChainBuilder } from './Typo/Query-ChainBuilder';
import { KnexNS } from '@fiborm/knex';
export declare function build(knexQueryBuilder: KnexNS.QueryBuilder, Dialect: FxSqlQueryDialect.Dialect, whereList: FxSqlQuerySubQuery.SubQueryBuildDescriptor[], opts: FxSqlQueryChainBuilder.ChainBuilderOptions): void;
