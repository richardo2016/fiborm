import type { FxOrmInstance } from "./instance";

export namespace FxOrmError {
    export interface ExtendedError extends Error {
        code?: number | string

        [ext: string]: any
    }

    export interface ValidateError extends FibjsEnforce.ValidationError {
        code?: number | string
    }

    export type ValidateErrorResult = ValidateError | ValidateError[]

    export interface ErrorWaitor {
        evt?: Class_Event,
        err: FxOrmError.ExtendedError
    }

    export interface BatchOperationInstanceErrorItem extends ExtendedError {
        index: number
        instance: FxOrmInstance.Class_Instance
    }
}