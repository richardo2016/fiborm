/// <reference types="@fibjs/enforce" />
/// <reference types="@fibjs/types" />
import type { FxOrmInstance } from "./instance";
export declare namespace FxOrmError {
    interface ExtendedError extends Error {
        code?: number | string;
        [ext: string]: any;
    }
    interface ValidateError extends FibjsEnforce.ValidationError {
        code?: number | string;
    }
    type ValidateErrorResult = ValidateError | ValidateError[];
    interface ErrorWaitor {
        evt?: Class_Event;
        err: FxOrmError.ExtendedError;
    }
    interface BatchOperationInstanceErrorItem extends ExtendedError {
        index: number;
        instance: FxOrmInstance.Class_Instance;
    }
}
