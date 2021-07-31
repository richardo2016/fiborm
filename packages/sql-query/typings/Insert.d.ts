/// <reference path="../src/@types/index.d.ts" />
export declare class InsertQuery implements FxSqlQuery.ChainBuilder__Insert {
    private Dialect;
    private opts;
    private sql;
    constructor(Dialect: FxSqlQueryDialect.Dialect, opts: FxSqlQuery.ChainBuilderOptions);
    into(table: string): this;
    set(values: FxSqlQuerySql.DataToSet): this;
    build(): string;
}
