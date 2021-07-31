/// <reference lib="es2017" />
import { CreateQuery } from "./Create";
import { SelectQuery } from "./Select";
import { InsertQuery } from "./Insert";
import { UpdateQuery } from "./Update";
import { RemoveQuery } from "./Remove";
export import Helpers = require('./Helpers');
export import Dialects = require('./Dialects');
export declare const comparators: FxSqlQueryComparator.ComparatorHash;
export declare const Text: FxSqlQuery.TypedQueryObjectWrapper<"text">;
export declare class Query implements FxSqlQuery.Class_Query {
    Dialect: FxSqlQueryDialect.Dialect;
    private opts;
    private _fns;
    private _proxyFn;
    constructor(_opts?: string | FxSqlQuery.QueryOptions);
    knex: import('@fiborm/knex').KnexInstance;
    escape: FxSqlQuery.Class_Query['escape'];
    escapeId: FxSqlQuery.Class_Query['escapeId'];
    escapeVal: FxSqlQuery.Class_Query['escapeVal'];
    create(): CreateQuery;
    select(): SelectQuery;
    insert(): InsertQuery;
    update(): UpdateQuery;
    remove(): RemoveQuery;
}
