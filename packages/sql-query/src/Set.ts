import Knex = require('@fiborm/knex')
import { escapeValForKnex } from './Helpers';

export function build (
	knexQueryBuilder: Knex.KnexNS.QueryBuilder,
	Dialect: FxSqlQueryDialect.Dialect,
	set: FxSqlQuerySql.DataToSet,
	opts: FxSqlQuery.ChainBuilderOptions
): void {
	opts = opts || {};

	if (!set || set.length === 0) {
		return ;
	}

	const safeSet: typeof set = {};

	for (let k in set) {
		safeSet[k] = escapeValForKnex(set[k], this.Dialect, opts)
	}

	knexQueryBuilder.update(safeSet);
};
