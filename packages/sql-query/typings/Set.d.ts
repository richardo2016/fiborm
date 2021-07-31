import Knex = require('@fiborm/knex');
export declare function build(knexQueryBuilder: Knex.KnexNS.QueryBuilder, Dialect: FxSqlQueryDialect.Dialect, set: FxSqlQuerySql.DataToSet, opts: FxSqlQuery.ChainBuilderOptions): void;
