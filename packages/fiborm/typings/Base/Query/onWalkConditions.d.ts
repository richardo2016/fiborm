/// <reference types="@fibjs/types" />
import type { FxOrmQueries } from '../../@types/Queries';
import type { FxOrmTypeHelpers } from '../../@types/_common';
export declare function normalizeWhereInput(input: any): {
    lower: any;
    higher: any;
};
export declare function normalizeInInput(input: any): any;
export declare function parseOperatorFunctionAsValue(opFnValue: FxOrmQueries.OperatorFunction): any;
export declare function isRawEqValue(input: any): input is (string | number | null | boolean);
export declare function filterRawEqValue(input: any): string | number | null;
export declare function mapComparisonOperatorToSymbol(op: FxOrmQueries.OPERATOR_TYPE_COMPARISON): "=" | ">" | ">=" | "<" | "<=" | "<>";
export declare function mapConjunctionOpSymbolToText(op_sym: symbol): "or" | "and";
declare type WalkThroughNodeCallback<T_CTX = any, T_FN = any, T_EVENTS = any> = (nodeInfo: {
    /**
     * @shouldit be symbol?
     */
    scene: T_EVENTS;
    walk_fn: T_FN;
    /**
     * walk_fn_context must be immutable
     */
    walk_fn_context: T_CTX;
    input: any;
    nodeFrame: any;
}) => {
    isReturn: Boolean;
    result: any;
};
declare type WalkWhereOnNodeCallback<T_CTX> = WalkThroughNodeCallback<T_CTX, any, 'inputIs:opfn:bracketRound' | 'inputAs:conjunctionAsAnd' | 'walkWhere:opfn:bracketRound' | 'walkWhere:opfn:refTableCol' | 'walkWhere:opfn:colref' | 'walkWhere:opfn:like' | 'walkWhere:opfn:between' | 'walkWhere:opfn:in' | 'walkWhere:opfn:comparator' | 'walkJoinOn:opsymbol:bracketRound' | 'walkJoinOn:opsymbol:conjunction'>;
export declare function gnrWalkWhere<T_NODE extends FxHQLParser.WhereNode['condition'], T_CTX extends Fibjs.AnyObject>({ onNode, }?: {
    onNode?: WalkWhereOnNodeCallback<T_CTX>;
}): ({
    (input: FxOrmTypeHelpers.ItOrListOfIt<null | undefined | FxOrmQueries.WhereObjectInput | FxOrmQueries.OperatorFunction>, context: {
        source_collection?: string;
        parent_conjunction_op?: FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
    } & T_CTX): T_NODE;
    onNode: WalkWhereOnNodeCallback<T_CTX>;
});
declare type WalkJoinOnOnNodeCallback<T_CTX> = WalkThroughNodeCallback<T_CTX, any, 'inputIs:opfn:joinVerb'>;
export declare function gnrWalkJoinOn<T_NODE extends FxOrmQueries.HqLNormalizer['joins'][any], T_CTX extends Fibjs.AnyObject = Fibjs.AnyObject>({ onJoinNode, walkerWhereConditions }?: {
    onJoinNode?: WalkJoinOnOnNodeCallback<T_CTX>;
    walkerWhereConditions?: ReturnType<typeof gnrWalkWhere>;
}): ({
    (input: FxOrmTypeHelpers.ItOrListOfIt<null | undefined | FxOrmQueries.WhereObjectInput | FxOrmQueries.OperatorFunction>, context: T_CTX & {
        source_collection: string;
        is_top_output?: boolean;
        joinParams?: {
            side?: FxOrmQueries.HqLNormalizer['joins'][any]['side'];
            specific_outer?: FxOrmQueries.HqLNormalizer['joins'][any]['specific_outer'];
            inner?: FxOrmQueries.HqLNormalizer['joins'][any]['inner'];
        };
    }): FxOrmTypeHelpers.ItOrListOfIt<T_NODE>;
    onJoinNode: WalkJoinOnOnNodeCallback<T_CTX>;
    walkerWhereConditions: ReturnType<typeof gnrWalkWhere>;
});
export {};
