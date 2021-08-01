import type { FxOrmQueries } from "../../@types/Queries";
export declare function OperatorFuncWrapper<T>($op_name: T extends (keyof FxOrmQueries.Class_QueryBuilder['Qlfn']['Operators'] | keyof FxOrmQueries.Class_QueryBuilder['Qlfn']['Selects'] | keyof FxOrmQueries.Class_QueryBuilder['Qlfn']['Others']) ? T : string): (value: any) => FxOrmQueries.OperatorFunction<T extends "substring" | "endsWith" | "startsWith" | "join" | "in" | "between" | "like" | "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "or" | "and" | "not" | "innerJoin" | "leftJoin" | "leftOuterJoin" | "rightJoin" | "rightOuterJoin" | "fullOuterJoin" | "is" | "notBetween" | "notIn" | "notLike" | "colref" | "bracketRound" | "bracketSquare" | "bracketBrace" | "quoteSingle" | "quoteDouble" | "quoteBack" | "refTableCol" ? T : string>;
export declare function isOperatorFunction(input: any): input is FxOrmQueries.OperatorFunction;
export declare function isOperatorResult(input: any): input is FxOrmQueries.OperatorFunctionResult;
export declare function isConjunctionOperator(op_name: string): op_name is FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
export declare function isAssertOperator(op_name: string): op_name is FxOrmQueries.OPERATOR_TYPE_ASSERT;
export declare function isPredicateOperator(op_name: string): op_name is FxOrmQueries.OPERATOR_TYPE_PREDICATE;
export declare function isComparisonOperator(op_name: string): op_name is FxOrmQueries.OPERATOR_TYPE_COMPARISON;
