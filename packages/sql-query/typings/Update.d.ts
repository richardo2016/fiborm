/// <reference path="../src/@types/index.d.ts" />
export declare class UpdateQuery implements FxSqlQuery.ChainBuilder__Update {
    private Dialect;
    private opts;
    private sql;
    constructor(Dialect: FxSqlQueryDialect.Dialect, opts: FxSqlQuery.QueryOptions);
    into(table: string): this;
    set(values: FxSqlQuerySql.DataToSet): this;
    where(...whereConditions: FxSqlQuerySubQuery.SubQueryBuildDescriptor['wheres'][]): this;
    build(): string;
}
