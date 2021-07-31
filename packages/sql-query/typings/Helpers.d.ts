/// <reference types="@fibjs/types" />
export declare const escapeQuery: FxSqlQueryHelpler.HelperModule['escapeQuery'];
export declare const dateToString: FxSqlQueryHelpler.HelperModule['dateToString'];
export declare const zeroPad: FxSqlQueryHelpler.HelperModule['zeroPad'];
export declare function get_table_alias(sql: FxSqlQuerySql.SqlQueryChainDescriptor, table: string): string;
export declare const parseTableInputStr: FxSqlQueryHelpler.HelperModule['parseTableInputStr'];
export declare function pickAliasFromFromDescriptor(fd: FxSqlQuerySql.QueryFromDescriptor): string;
export declare function pickColumnAsFromSelectFieldsDescriptor(sitem: FxSqlQuerySql.SqlSelectFieldItemDescriptor): FxSqlQuerySql.SqlSelectFieldItemDescriptor['as'];
export declare function autoIncreatementTableIndex(from: FxSqlQuerySql.SqlQueryChainDescriptor['from']): number;
export declare function defaultTableAliasNameRule(idx: number): string;
export declare const DialectTypes: FxSqlQueryDialect.DialectType[];
export declare function ucfirst(str?: string): string;
export declare function ensureNumber(num: any): any;
export declare function bufferToString(buffer: Class_Buffer, dialect: FxSqlQueryDialect.DialectType): string;
export declare function escapeValForKnex(val: any, Dialect: FxSqlQueryDialect.Dialect, opts: FxSqlQuery.ChainBuilderOptions): any;
export declare function cutOffOrderDirectionFromColumnFirstStr(col_name: string): {
    col_name: string;
    direction: FxSqlQuerySql.SqlOrderDescriptor['d'];
};
