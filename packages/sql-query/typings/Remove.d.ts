export declare class RemoveQuery implements FxSqlQuery.ChainBuilder__Remove {
    private Dialect;
    private opts;
    private sql;
    constructor(Dialect: FxSqlQueryDialect.Dialect, opts: FxSqlQuery.ChainBuilderOptions);
    from(table: string): this;
    where(...whereConditions: FxSqlQuerySubQuery.SubQueryBuildDescriptor['wheres'][]): this;
    build(): string;
    offset(offset: number): this;
    limit(limit: number): this;
    order(column: string | string[], dir: FxSqlQuery.QueryOrderDirection): this;
}
