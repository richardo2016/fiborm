/// <reference path="Sql.d.ts" />

declare namespace FxSqlQueryDialect {
	type DialectType = 'mysql' | 'mssql' | 'sqlite' | 'postgresql'

	interface DataTypesDescriptorBase {
		id: string
		int: string
		float: string
		bool: string
		text: string
	}

	type DialectFieldType = keyof DataTypesDescriptorBase

	interface DataTypesDescriptor extends DataTypesDescriptorBase {
		isSQLITE?: boolean
	}

	interface Dialect {
		DataTypes: DataTypesDescriptor
		type: DialectType

		escape: {
			(
				query: FxSqlQuerySql.SqlFragmentStr,
				args: FxSqlQuerySql.SqlAssignmentValues
			): string
		}
		escapeId: {
			(...els: (FxSqlQuerySql.SqlEscapeArgIdType | {str: string, escapes: string[]})[]): string
		}
		escapeVal: {
			(val: FxSqlQuerySql.SqlEscapeArgType, timezone?: FxSqlQuery.FxSqlQueryTimezone): string
			(vals: FxSqlQuerySql.DetailedQueryWhereCondition__InStyle['val'], timezone?: FxSqlQuery.FxSqlQueryTimezone): string
		}

		limitAsTop: boolean

		// readonly knex: Knex
		readonly knex: import('@fiborm/knex').KnexInstance
	}

	type fn_escape = Dialect['escape']
	type fn_escapeId = Dialect['escapeId']
	type fn_escapeVal = Dialect['escapeVal']
}
