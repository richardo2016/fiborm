/// <reference types="@fibjs/types" />
import type { FxOrmTypeHelpers } from "../../@types/_common";
/**
 * default use preorder-strategy to build where condition
 */
export declare const dfltWalkWhere: {
    (input: FxOrmTypeHelpers.ItOrListOfIt<FIBJS.GeneralObject | import("../../@types/Queries").FxOrmQueries.OperatorFunction<string>>, context: {
        source_collection?: string;
        parent_conjunction_op?: import("../../@types/Queries").FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
    } & FIBJS.GeneralObject): FxHQLParser.IParsedNode<{
        type: "operator";
        operator: import("../../@types/Queries").FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
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
                operator: import("../../@types/Queries").FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
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
                operator: import("../../@types/Queries").FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
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
    onNode: (nodeInfo: {
        scene: "inputIs:opfn:bracketRound" | "inputAs:conjunctionAsAnd" | "walkWhere:opfn:bracketRound" | "walkWhere:opfn:refTableCol" | "walkWhere:opfn:colref" | "walkWhere:opfn:like" | "walkWhere:opfn:between" | "walkWhere:opfn:in" | "walkWhere:opfn:comparator" | "walkJoinOn:opsymbol:bracketRound" | "walkJoinOn:opsymbol:conjunction";
        walk_fn: any;
        walk_fn_context: FIBJS.GeneralObject;
        input: any;
        nodeFrame: any;
    }) => {
        isReturn: Boolean;
        result: any;
    };
};
export declare const dfltWalkOn: {
    (input: FxOrmTypeHelpers.ItOrListOfIt<FIBJS.GeneralObject | import("../../@types/Queries").FxOrmQueries.OperatorFunction<string>>, context: FIBJS.GeneralObject & {
        source_collection: string;
        is_top_output?: boolean;
        joinParams?: {
            side?: FxHQLParser.Undefineable<"left" | "right" | "full">;
            specific_outer?: boolean;
            inner?: boolean;
        };
    }): FxOrmTypeHelpers.ItOrListOfIt<{
        side?: FxHQLParser.Undefineable<"left" | "right" | "full">;
        specific_outer: boolean;
        inner: boolean;
        conditions: FxHQLParser.ExprOperatorEqNodeInJoin[];
        ref_right: FxHQLParser.IParsedNode<{
            type: "operator";
            operator: import("../../@types/Queries").FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
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
                    operator: import("../../@types/Queries").FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
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
                    operator: import("../../@types/Queries").FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
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
    onJoinNode: (nodeInfo: {
        scene: "inputIs:opfn:joinVerb";
        walk_fn: any;
        walk_fn_context: FIBJS.GeneralObject;
        input: any;
        nodeFrame: any;
    }) => {
        isReturn: Boolean;
        result: any;
    };
    walkerWhereConditions: {
        (input: FxOrmTypeHelpers.ItOrListOfIt<FIBJS.GeneralObject | import("../../@types/Queries").FxOrmQueries.OperatorFunction<string>>, context: {
            source_collection?: string;
            parent_conjunction_op?: import("../../@types/Queries").FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
        } & FIBJS.GeneralObject): FxHQLParser.IParsedNode<{
            type: "operator";
            operator: import("../../@types/Queries").FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
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
                    operator: import("../../@types/Queries").FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
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
                    operator: import("../../@types/Queries").FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
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
        onNode: (nodeInfo: {
            scene: "inputIs:opfn:bracketRound" | "inputAs:conjunctionAsAnd" | "walkWhere:opfn:bracketRound" | "walkWhere:opfn:refTableCol" | "walkWhere:opfn:colref" | "walkWhere:opfn:like" | "walkWhere:opfn:between" | "walkWhere:opfn:in" | "walkWhere:opfn:comparator" | "walkJoinOn:opsymbol:bracketRound" | "walkJoinOn:opsymbol:conjunction";
            walk_fn: any;
            walk_fn_context: FIBJS.GeneralObject;
            input: any;
            nodeFrame: any;
        }) => {
            isReturn: Boolean;
            result: any;
        };
    };
};
