import { escapeValForKnex } from './Helpers';
import { FxSqlQueryDialect } from './Typo/Dialect';
import { FxSqlQueryChainBuilder } from './Typo/Query-ChainBuilder';
import { FxSqlQuerySql } from './Typo/Sql';

import type { KnexNS } from '@fiborm/knex';

export function build (
	knexQueryBuilder: KnexNS.QueryBuilder,
	Dialect: FxSqlQueryDialect.Dialect,
	set: FxSqlQuerySql.DataToSet,
	opts: FxSqlQueryChainBuilder.ChainBuilderOptions
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
