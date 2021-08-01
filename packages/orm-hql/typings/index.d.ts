/// <reference path="../@types/index.d.ts" />
declare class HQLParser implements FxHQL.Parser {
    static singleton: HQLParser;
    _parser: FxHQL.Parser['_parser'];
    constructor(options?: {});
    get HQLParser(): typeof HQLParser;
    parse(sql: FxHQLTypeHelpers.FirstParameter<FxHQL.Parser['parse']>): any;
    toSql(parsed: FxHQLTypeHelpers.FirstParameter<FxHQL.Parser['toSql']>): any;
}
declare const _default: HQLParser;
export = _default;
