import type { FxOrmError } from "./Error";

export namespace FxOrmNS {
    export interface PredefineErrorCodes {
        QUERY_ERROR: number
        NOT_FOUND: number
        NOT_DEFINED: number
        NO_SUPPORT: number
        MISSING_CALLBACK: number
        PARAM_MISMATCH: number
        CONNECTION_LOST: number
        BAD_MODEL: number
    }

    export type IdType = string | number
    export type Arraible<T> = T | T[]

    export interface VoidCallback<T_RESULT = any, T_THIS = any> {
        (this: T_THIS, err?: FxOrmError.ExtendedError | null): T_RESULT
    }

    export interface ExecutionCallback<T, T_RESULT = any, T_THIS = any> {
        (this: T_THIS, err?: string | FxOrmError.ExtendedError | FxOrmError.ExtendedError[] | null, result?: T): T_RESULT
    }

    export interface GenericCallback<T, T_RESULT = any, T_THIS = any> {
        (this: T_THIS, err: FxOrmError.ExtendedError | null, result?: T): T_RESULT
    }

    export interface NextCallback<ERR_T = string, T_RESULT = any, T_THIS = any> {
        (this: T_THIS, err?: ERR_T): T_RESULT
    }

    export interface SuccessCallback<T> {
        (result?: T): any
    }

    export interface ValidatorCallback {
        (errors: Error[]): void
    }

    export type Nilable<T> = null | T

    export interface ExposedResult<T = any> {
        error: FxOrmError.ExtendedError,
        result?: T
    }

    export interface SyncCallbackInputArags<T = any> {
        callback?: FxOrmNS.ExecutionCallback<T>,
        is_sync?: boolean
    }

    export interface ValueWaitor<T = any> {
        evt?: Class_Event,
        value: T
    }

}

export namespace FxOrmTypeHelpers {
    export type Parameters<T> = T extends (...args: infer T) => any ? T : never;
    export type FirstParameter<T> = T extends (arg: infer T, ...args: any[]) => any ? T : never;
    export type SecondParameter<T> = T extends (arg1: any, arg: infer T, ...args: any[]) => any ? T : never;
    export type _3rdParameter<T> = T extends (arg1: any, arg2: any, arg: infer T, ...args: any[]) => any ? T : never;

    export type ReturnType<T> = T extends (...args: any[]) => infer T ? T : never;

    export type InstanceOf<T> = T extends new (...args: any[]) => infer T ? T : never;

    export type ConstructorParams<T> = T extends {
        new (...args: infer U): any
    } ? U : never

    export type ItOrListOfIt<T> = T | T[]
    export type EleOrListAccordingTo<T, U = T, T2 = FlattenIfArray<T>> = T extends T2[] ? U[] : U
    export type FlattenIfArray<T> = T extends (infer R)[] ? R : T
    export type TransformArrayOrItsEle<T1, T2> = T1 extends any[] ? FlattenIfArray<T2>[] : FlattenIfArray<T2>

    export type RecordEleArray<K extends keyof T, T> = {
        [P in K]: T[K][];
    };
    export type RecordEle<K extends keyof T, T> = {
        [P in K]: T[K];
    };

    export type ReverseKeyOf<K extends any, T> = Exclude<keyof T, K>
    export type ReReverseKeyOf<K extends any, T> = ReverseKeyOf<ReverseKeyOf<K, T>, T>

    export type FuncReturnArrayOrItEleViaArgIdx0<FUNC> =
        FUNC extends (arg0: infer ARG, ...args: infer OTHERS) => infer RTN ? (
            {
                (arg0: FlattenIfArray<ARG>[], ...args: OTHERS): RTN[]
                (arg0: FlattenIfArray<ARG>, ...args: OTHERS): RTN
            }
        ) : never

    export type MergeToFunctionArgOption0<FUNC, MERGED> = FUNC extends (arg0: infer ARG, ...args: infer OTHERS) => infer RTN ?
            (arg0: ARG & MERGED, ...args: OTHERS) => RTN
            : never

    export type FuncReturnArrayOrItEleViaArgIdx1<FUNC> =
        FUNC extends (arg0: infer ARG0, arg1: infer ARG, ...args: infer OTHERS) => infer RTN ? (
            {
                (arg0: ARG0, arg1: FlattenIfArray<ARG>[], ...args: OTHERS): RTN[]
                (arg0: ARG0, arg1: FlattenIfArray<ARG>, ...args: OTHERS): RTN
            }
        ) : never
}
