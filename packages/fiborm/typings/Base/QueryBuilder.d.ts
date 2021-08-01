import { dfltWalkWhere, dfltWalkOn } from './Query/walkOnHQL';
import { FxOrmModel } from '../@types/model';
import { FxOrmTypeHelpers } from '../@types/_common';
import { FxOrmQueries } from '../@types/Queries';
declare class Class_QueryBuilder<TUPLE_ITEM = any> implements FxOrmQueries.Class_QueryBuilder<TUPLE_ITEM> {
    private _tuples;
    get Op(): {
        and: symbol;
        or: symbol;
        gt: symbol;
        gte: symbol;
        lt: symbol;
        lte: symbol;
        ne: symbol;
        eq: symbol;
        is: symbol;
        not: symbol;
        between: symbol;
        notBetween: symbol;
        in: symbol;
        notIn: symbol;
        like: symbol;
        notLike: symbol;
        startsWith: symbol;
        endsWith: symbol;
        substring: symbol;
        colref: symbol;
    };
    get Opf(): {
        and: (value?: any) => FxOrmQueries.OperatorFunction<"and">;
        or: (value?: any) => FxOrmQueries.OperatorFunction<"or">;
        gt: (value?: any) => FxOrmQueries.OperatorFunction<"gt">;
        gte: (value?: any) => FxOrmQueries.OperatorFunction<"gte">;
        lt: (value?: any) => FxOrmQueries.OperatorFunction<"lt">;
        lte: (value?: any) => FxOrmQueries.OperatorFunction<"lte">;
        ne: (value?: any) => FxOrmQueries.OperatorFunction<"ne">;
        eq: (value?: any) => FxOrmQueries.OperatorFunction<"eq">;
        is: (value?: any) => FxOrmQueries.OperatorFunction<"is">;
        not: (value?: any) => FxOrmQueries.OperatorFunction<"not">;
        between: (value?: any) => FxOrmQueries.OperatorFunction<"between">;
        notBetween: (value?: any) => FxOrmQueries.OperatorFunction<"notBetween">;
        in: (value?: any) => FxOrmQueries.OperatorFunction<"in">;
        notIn: (value?: any) => FxOrmQueries.OperatorFunction<"notIn">;
        like: (value?: any) => FxOrmQueries.OperatorFunction<"like">;
        notLike: (value?: any) => FxOrmQueries.OperatorFunction<"notLike">;
        startsWith: (value?: any) => FxOrmQueries.OperatorFunction<"startsWith">;
        endsWith: (value?: any) => FxOrmQueries.OperatorFunction<"endsWith">;
        substring: (value?: any) => FxOrmQueries.OperatorFunction<"substring">;
        colref: (value?: any) => FxOrmQueries.OperatorFunction<"colref">;
    };
    get Ql(): {
        Operators: {
            and: symbol;
            or: symbol;
            gt: symbol;
            gte: symbol;
            lt: symbol;
            lte: symbol;
            ne: symbol;
            eq: symbol;
            is: symbol;
            not: symbol;
            between: symbol;
            notBetween: symbol;
            in: symbol;
            notIn: symbol;
            like: symbol;
            notLike: symbol;
            startsWith: symbol;
            endsWith: symbol;
            substring: symbol;
            colref: symbol;
        };
        Others: {
            bracketRound: symbol;
            bracketSquare: symbol;
            bracketBrace: symbol;
            quoteSingle: symbol;
            quoteDouble: symbol;
            quoteBack: symbol;
        };
    };
    get Qlfn(): {
        Operators: {
            and: (value?: any) => FxOrmQueries.OperatorFunction<"and">;
            or: (value?: any) => FxOrmQueries.OperatorFunction<"or">;
            gt: (value?: any) => FxOrmQueries.OperatorFunction<"gt">;
            gte: (value?: any) => FxOrmQueries.OperatorFunction<"gte">;
            lt: (value?: any) => FxOrmQueries.OperatorFunction<"lt">;
            lte: (value?: any) => FxOrmQueries.OperatorFunction<"lte">;
            ne: (value?: any) => FxOrmQueries.OperatorFunction<"ne">;
            eq: (value?: any) => FxOrmQueries.OperatorFunction<"eq">;
            is: (value?: any) => FxOrmQueries.OperatorFunction<"is">;
            not: (value?: any) => FxOrmQueries.OperatorFunction<"not">;
            between: (value?: any) => FxOrmQueries.OperatorFunction<"between">;
            notBetween: (value?: any) => FxOrmQueries.OperatorFunction<"notBetween">;
            in: (value?: any) => FxOrmQueries.OperatorFunction<"in">;
            notIn: (value?: any) => FxOrmQueries.OperatorFunction<"notIn">;
            like: (value?: any) => FxOrmQueries.OperatorFunction<"like">;
            notLike: (value?: any) => FxOrmQueries.OperatorFunction<"notLike">;
            startsWith: (value?: any) => FxOrmQueries.OperatorFunction<"startsWith">;
            endsWith: (value?: any) => FxOrmQueries.OperatorFunction<"endsWith">;
            substring: (value?: any) => FxOrmQueries.OperatorFunction<"substring">;
            colref: (value?: any) => FxOrmQueries.OperatorFunction<"colref">;
        };
        Selects: {
            join: (value?: any) => FxOrmQueries.OperatorFunction<"join">;
            leftJoin: (value?: any) => FxOrmQueries.OperatorFunction<"leftJoin">;
            leftOuterJoin: (value?: any) => FxOrmQueries.OperatorFunction<"leftOuterJoin">;
            rightJoin: (value?: any) => FxOrmQueries.OperatorFunction<"rightJoin">;
            rightOuterJoin: (value?: any) => FxOrmQueries.OperatorFunction<"rightOuterJoin">;
            innerJoin: (value?: any) => FxOrmQueries.OperatorFunction<"innerJoin">;
            fullOuterJoin: (value?: any) => FxOrmQueries.OperatorFunction<"fullOuterJoin">;
        };
        Others: {
            bracketRound: (value?: any) => FxOrmQueries.OperatorFunction<"bracketRound">;
            bracketSquare: (value?: any) => FxOrmQueries.OperatorFunction<"bracketSquare">;
            bracketBrace: (value?: any) => FxOrmQueries.OperatorFunction<"bracketBrace">;
            quoteSingle: (value?: any) => FxOrmQueries.OperatorFunction<"quoteSingle">;
            quoteDouble: (value?: any) => FxOrmQueries.OperatorFunction<"quoteDouble">;
            quoteBack: (value?: any) => FxOrmQueries.OperatorFunction<"quoteBack">;
            refTableCol: (value?: any) => FxOrmQueries.OperatorFunction<"refTableCol">;
        };
    };
    get join(): (value?: any) => FxOrmQueries.OperatorFunction<"join">;
    get leftJoin(): (value?: any) => FxOrmQueries.OperatorFunction<"leftJoin">;
    get leftOuterJoin(): (value?: any) => FxOrmQueries.OperatorFunction<"leftOuterJoin">;
    get rightJoin(): (value?: any) => FxOrmQueries.OperatorFunction<"rightJoin">;
    get rightOuterJoin(): (value?: any) => FxOrmQueries.OperatorFunction<"rightOuterJoin">;
    get innerJoin(): (value?: any) => FxOrmQueries.OperatorFunction<"innerJoin">;
    get fullOuterJoin(): (value?: any) => FxOrmQueries.OperatorFunction<"fullOuterJoin">;
    get refTableCol(): (value?: any) => FxOrmQueries.OperatorFunction<"refTableCol">;
    model: FxOrmModel.Class_Model;
    conditions: any;
    [k: string]: any;
    get _symbol(): symbol;
    get notQueryBuilder(): boolean;
    propIdentifier(propname: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['prop']>): string;
    associcatedPropIdentifier(assoc_name: string, propname: FxOrmTypeHelpers.FirstParameter<FxOrmModel.Class_Model['prop']>): string;
    getModel(): FxOrmModel.Class_Model;
    find(opts?: FxOrmTypeHelpers.FirstParameter<FxOrmQueries.Class_QueryBuilder['find']>): TUPLE_ITEM[];
    findByRef<T = any>(...args: FxOrmTypeHelpers.Parameters<FxOrmQueries.Class_QueryBuilder['findByRef']>): T[];
    one(opts?: FxOrmTypeHelpers.FirstParameter<FxOrmQueries.Class_QueryBuilder['one']>): TUPLE_ITEM;
    get(id?: FxOrmTypeHelpers.FirstParameter<FxOrmQueries.Class_QueryBuilder['get']>): TUPLE_ITEM;
    exists(id?: string | number | FxOrmTypeHelpers.FirstParameter<FxOrmQueries.Class_QueryBuilder['count']>['where']): boolean;
    count(opts: FxOrmTypeHelpers.FirstParameter<FxOrmQueries.Class_QueryBuilder['count']>): number;
    /**
     * @description build one query from hql
     */
    parseHQL<T = any>(hql: string): any;
    /**
     * @description normalize one input to where
     */
    walkWhere(...args: FxOrmTypeHelpers.Parameters<typeof dfltWalkWhere>): FxHQLParser.IParsedNode<{
        type: "operator";
        operator: FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
        operand?: FxHQLParser.IParsedNode<{
            type: "identifier";
            value: string;
        }>;
        op_left: FxHQLParser.IParsedNode<{
            type: "column_expr";
            expression: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<{
                type: "column";
                table: string;
                name: string;
            }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
                op_left: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
                op_right: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "not";
                operand: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "is_null";
                not: boolean;
                value: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | {
                type: "select_all";
                table: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            };
            alias?: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "identifier";
            value: string;
        }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
            type: "operator";
            operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
            op_left: FxHQLParser.IParsedNode<{
                type: "column_expr";
                expression: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | {
                    type: "select_all";
                    table: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                };
                alias?: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<{
                type: "column";
                table: string;
                name: string;
            }> | FxHQLParser.IParsedNode<{
                type: "string";
                string: string;
            }> | FxHQLParser.IParsedNode<{
                type: "decimal";
                value: string;
            }>;
            op_right: FxHQLParser.IParsedNode<{
                type: "column_expr";
                expression: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | {
                    type: "select_all";
                    table: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                };
                alias?: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<{
                type: "column";
                table: string;
                name: string;
            }> | FxHQLParser.IParsedNode<{
                type: "string";
                string: string;
            }> | FxHQLParser.IParsedNode<{
                type: "decimal";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "operator";
            operator: "not";
            operand: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "is_null";
            not: boolean;
            value: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "expr_comma_list";
            exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
                op_left: FxHQLParser.IParsedNode<{
                    type: "column_expr";
                    expression: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | {
                        type: "select_all";
                        table: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    };
                    alias?: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
                op_right: FxHQLParser.IParsedNode<{
                    type: "column_expr";
                    expression: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | {
                        type: "select_all";
                        table: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    };
                    alias?: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "not";
                operand: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "is_null";
                not: boolean;
                value: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }>)[];
        }> | FxHQLParser.IParsedNode<{
            type: "string";
            string: string;
        }> | FxHQLParser.IParsedNode<{
            type: "decimal";
            value: string;
        }>;
        op_right: FxHQLParser.IParsedNode<{
            type: "column_expr";
            expression: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<{
                type: "column";
                table: string;
                name: string;
            }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
                op_left: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
                op_right: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "not";
                operand: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "is_null";
                not: boolean;
                value: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | {
                type: "select_all";
                table: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            };
            alias?: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "identifier";
            value: string;
        }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
            type: "operator";
            operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
            op_left: FxHQLParser.IParsedNode<{
                type: "column_expr";
                expression: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | {
                    type: "select_all";
                    table: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                };
                alias?: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<{
                type: "column";
                table: string;
                name: string;
            }> | FxHQLParser.IParsedNode<{
                type: "string";
                string: string;
            }> | FxHQLParser.IParsedNode<{
                type: "decimal";
                value: string;
            }>;
            op_right: FxHQLParser.IParsedNode<{
                type: "column_expr";
                expression: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | {
                    type: "select_all";
                    table: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                };
                alias?: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<{
                type: "column";
                table: string;
                name: string;
            }> | FxHQLParser.IParsedNode<{
                type: "string";
                string: string;
            }> | FxHQLParser.IParsedNode<{
                type: "decimal";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "operator";
            operator: "not";
            operand: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "is_null";
            not: boolean;
            value: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "expr_comma_list";
            exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
                op_left: FxHQLParser.IParsedNode<{
                    type: "column_expr";
                    expression: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | {
                        type: "select_all";
                        table: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    };
                    alias?: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
                op_right: FxHQLParser.IParsedNode<{
                    type: "column_expr";
                    expression: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | {
                        type: "select_all";
                        table: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    };
                    alias?: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "not";
                operand: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "is_null";
                not: boolean;
                value: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }>)[];
        }> | FxHQLParser.IParsedNode<{
            type: "string";
            string: string;
        }> | FxHQLParser.IParsedNode<{
            type: "decimal";
            value: string;
        }>;
    }> | FxHQLParser.IParsedNode<{
        type: "operator";
        operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
        op_left: FxHQLParser.IParsedNode<{
            type: "column_expr";
            expression: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<{
                type: "column";
                table: string;
                name: string;
            }> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
                operand?: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
                op_left: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "expr_comma_list";
                    exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }>)[];
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
                op_right: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "expr_comma_list";
                    exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }>)[];
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "not";
                operand: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "is_null";
                not: boolean;
                value: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | {
                type: "select_all";
                table: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            };
            alias?: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "identifier";
            value: string;
        }> | FxHQLParser.IParsedNode<{
            type: "column";
            table: string;
            name: string;
        }> | FxHQLParser.IParsedNode<{
            type: "string";
            string: string;
        }> | FxHQLParser.IParsedNode<{
            type: "decimal";
            value: string;
        }>;
        op_right: FxHQLParser.IParsedNode<{
            type: "column_expr";
            expression: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<{
                type: "column";
                table: string;
                name: string;
            }> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
                operand?: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
                op_left: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "expr_comma_list";
                    exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }>)[];
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
                op_right: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "expr_comma_list";
                    exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }>)[];
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "not";
                operand: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "is_null";
                not: boolean;
                value: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | {
                type: "select_all";
                table: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            };
            alias?: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "identifier";
            value: string;
        }> | FxHQLParser.IParsedNode<{
            type: "column";
            table: string;
            name: string;
        }> | FxHQLParser.IParsedNode<{
            type: "string";
            string: string;
        }> | FxHQLParser.IParsedNode<{
            type: "decimal";
            value: string;
        }>;
    }> | FxHQLParser.IParsedNode<{
        type: "operator";
        operator: "not";
        operand: FxHQLParser.IParsedNode<{
            type: "identifier";
            value: string;
        }>;
    }> | FxHQLParser.IParsedNode<{
        type: "is_null";
        not: boolean;
        value: FxHQLParser.IParsedNode<{
            type: "identifier";
            value: string;
        }>;
    }>;
    /**
     * @description normalize one input to on conditions
     */
    walkJoinOn(...args: FxOrmTypeHelpers.Parameters<typeof dfltWalkOn>): FxOrmTypeHelpers.ItOrListOfIt<{
        side?: FxHQLParser.Undefineable<"left" | "right" | "full">;
        specific_outer: boolean;
        inner: boolean;
        conditions: FxHQLParser.ExprOperatorEqNodeInJoin[];
        ref_right: FxHQLParser.IParsedNode<{
            type: "operator";
            operator: FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
            operand?: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }>;
            op_left: FxHQLParser.IParsedNode<{
                type: "column_expr";
                expression: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
                    op_left: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                    op_right: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | {
                    type: "select_all";
                    table: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                };
                alias?: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
                op_left: FxHQLParser.IParsedNode<{
                    type: "column_expr";
                    expression: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | {
                        type: "select_all";
                        table: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    };
                    alias?: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
                op_right: FxHQLParser.IParsedNode<{
                    type: "column_expr";
                    expression: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | {
                        type: "select_all";
                        table: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    };
                    alias?: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "not";
                operand: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "is_null";
                not: boolean;
                value: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "expr_comma_list";
                exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
                    op_left: FxHQLParser.IParsedNode<{
                        type: "column_expr";
                        expression: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }> | FxHQLParser.IParsedNode<{
                            type: "column";
                            table: string;
                            name: string;
                        }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                            type: "operator";
                            operator: "not";
                            operand: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | FxHQLParser.IParsedNode<{
                            type: "is_null";
                            not: boolean;
                            value: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | {
                            type: "select_all";
                            table: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        };
                        alias?: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                    op_right: FxHQLParser.IParsedNode<{
                        type: "column_expr";
                        expression: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }> | FxHQLParser.IParsedNode<{
                            type: "column";
                            table: string;
                            name: string;
                        }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                            type: "operator";
                            operator: "not";
                            operand: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | FxHQLParser.IParsedNode<{
                            type: "is_null";
                            not: boolean;
                            value: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | {
                            type: "select_all";
                            table: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        };
                        alias?: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }>)[];
            }> | FxHQLParser.IParsedNode<{
                type: "string";
                string: string;
            }> | FxHQLParser.IParsedNode<{
                type: "decimal";
                value: string;
            }>;
            op_right: FxHQLParser.IParsedNode<{
                type: "column_expr";
                expression: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
                    op_left: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                    op_right: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | {
                    type: "select_all";
                    table: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                };
                alias?: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
                op_left: FxHQLParser.IParsedNode<{
                    type: "column_expr";
                    expression: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | {
                        type: "select_all";
                        table: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    };
                    alias?: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
                op_right: FxHQLParser.IParsedNode<{
                    type: "column_expr";
                    expression: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | {
                        type: "select_all";
                        table: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    };
                    alias?: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "string";
                    string: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "decimal";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "operator";
                operator: "not";
                operand: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "is_null";
                not: boolean;
                value: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "expr_comma_list";
                exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
                    op_left: FxHQLParser.IParsedNode<{
                        type: "column_expr";
                        expression: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }> | FxHQLParser.IParsedNode<{
                            type: "column";
                            table: string;
                            name: string;
                        }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                            type: "operator";
                            operator: "not";
                            operand: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | FxHQLParser.IParsedNode<{
                            type: "is_null";
                            not: boolean;
                            value: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | {
                            type: "select_all";
                            table: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        };
                        alias?: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                    op_right: FxHQLParser.IParsedNode<{
                        type: "column_expr";
                        expression: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }> | FxHQLParser.IParsedNode<{
                            type: "column";
                            table: string;
                            name: string;
                        }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                            type: "operator";
                            operator: "not";
                            operand: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | FxHQLParser.IParsedNode<{
                            type: "is_null";
                            not: boolean;
                            value: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | {
                            type: "select_all";
                            table: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        };
                        alias?: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "column";
                        table: string;
                        name: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }>)[];
            }> | FxHQLParser.IParsedNode<{
                type: "string";
                string: string;
            }> | FxHQLParser.IParsedNode<{
                type: "decimal";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "operator";
            operator: "=" | ">" | ">=" | "<" | "<=" | "<>" | "<=>" | "!=";
            op_left: FxHQLParser.IParsedNode<{
                type: "column_expr";
                expression: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
                    operand?: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                    op_left: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "expr_comma_list";
                        exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                            type: "operator";
                            operator: "not";
                            operand: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | FxHQLParser.IParsedNode<{
                            type: "is_null";
                            not: boolean;
                            value: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }>)[];
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                    op_right: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "expr_comma_list";
                        exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                            type: "operator";
                            operator: "not";
                            operand: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | FxHQLParser.IParsedNode<{
                            type: "is_null";
                            not: boolean;
                            value: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }>)[];
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | {
                    type: "select_all";
                    table: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                };
                alias?: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<{
                type: "column";
                table: string;
                name: string;
            }> | FxHQLParser.IParsedNode<{
                type: "string";
                string: string;
            }> | FxHQLParser.IParsedNode<{
                type: "decimal";
                value: string;
            }>;
            op_right: FxHQLParser.IParsedNode<{
                type: "column_expr";
                expression: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "column";
                    table: string;
                    name: string;
                }> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
                    operand?: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                    op_left: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "expr_comma_list";
                        exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                            type: "operator";
                            operator: "not";
                            operand: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | FxHQLParser.IParsedNode<{
                            type: "is_null";
                            not: boolean;
                            value: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }>)[];
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                    op_right: FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                        type: "operator";
                        operator: "not";
                        operand: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "is_null";
                        not: boolean;
                        value: FxHQLParser.IParsedNode<{
                            type: "identifier";
                            value: string;
                        }>;
                    }> | FxHQLParser.IParsedNode<{
                        type: "expr_comma_list";
                        exprs: (FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                            type: "operator";
                            operator: "not";
                            operand: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }> | FxHQLParser.IParsedNode<{
                            type: "is_null";
                            not: boolean;
                            value: FxHQLParser.IParsedNode<{
                                type: "identifier";
                                value: string;
                            }>;
                        }>)[];
                    }> | FxHQLParser.IParsedNode<{
                        type: "string";
                        string: string;
                    }> | FxHQLParser.IParsedNode<{
                        type: "decimal";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<any> | FxHQLParser.IParsedNode<{
                    type: "operator";
                    operator: "not";
                    operand: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | FxHQLParser.IParsedNode<{
                    type: "is_null";
                    not: boolean;
                    value: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                }> | {
                    type: "select_all";
                    table: FxHQLParser.IParsedNode<{
                        type: "identifier";
                        value: string;
                    }>;
                };
                alias?: FxHQLParser.IParsedNode<{
                    type: "identifier";
                    value: string;
                }>;
            }> | FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }> | FxHQLParser.IParsedNode<{
                type: "column";
                table: string;
                name: string;
            }> | FxHQLParser.IParsedNode<{
                type: "string";
                string: string;
            }> | FxHQLParser.IParsedNode<{
                type: "decimal";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "operator";
            operator: "not";
            operand: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }>;
        }> | FxHQLParser.IParsedNode<{
            type: "is_null";
            not: boolean;
            value: FxHQLParser.IParsedNode<{
                type: "identifier";
                value: string;
            }>;
        }>;
    }>;
    first(): TUPLE_ITEM;
    last(): TUPLE_ITEM;
    all(): TUPLE_ITEM[];
}
export default Class_QueryBuilder;
