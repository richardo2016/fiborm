/// <reference types="@fibjs/types" />
import type { FxOrmDML } from '../../@types/DML';
import type { FxOrmTypeHelpers } from '../../@types/_common';
import type { KnexInstance, KnexNS } from '@fiborm/knex';
import { FxOrmQueries } from '../../@types/Queries';
export declare function filterKnexBuilderBeforeQuery(builder: any, beforeQuery: Function | Function[], ctx?: any): any;
export declare function filterResultAfterQuery(result: any, afterQuery: Function | Function[], ctx?: any): any;
export declare function filterWhereToKnexActions(opts: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect['find']>): void;
export declare const filterJoinOnConditionToClauseBuilderActions: {
    (input: FxOrmTypeHelpers.ItOrListOfIt<FIBJS.GeneralObject | FxOrmQueries.OperatorFunction<string>>, context: {
        source_collection?: string;
        parent_conjunction_op?: FxOrmQueries.OPERATOR_TYPE_CONJUNCTION;
    } & {
        source_collection: string;
        target_collection: string;
        jbuilder: KnexNS.JoinClause;
        knex: KnexInstance;
    }): null;
    onNode: (nodeInfo: {
        scene: "inputIs:opfn:bracketRound" | "inputAs:conjunctionAsAnd" | "walkWhere:opfn:bracketRound" | "walkWhere:opfn:refTableCol" | "walkWhere:opfn:colref" | "walkWhere:opfn:like" | "walkWhere:opfn:between" | "walkWhere:opfn:in" | "walkWhere:opfn:comparator" | "walkJoinOn:opsymbol:bracketRound" | "walkJoinOn:opsymbol:conjunction";
        walk_fn: any;
        walk_fn_context: {
            source_collection: string;
            target_collection: string;
            jbuilder: KnexNS.JoinClause;
            knex: KnexInstance;
        };
        input: any;
        nodeFrame: any;
    }) => {
        isReturn: Boolean;
        result: any;
    };
};
export declare function filterJoinSelectToKnexActions(opts: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect['find']>, source_collection: string): void;
