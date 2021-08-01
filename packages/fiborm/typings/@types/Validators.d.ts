/// <reference types="@fibjs/enforce" />
import type { FxOrmInstance } from "./instance";
import type { FxOrmModel } from "./model";
import type { Class_ORM } from "./ORM";
import type { FxOrmNS } from "./_common";
export declare namespace FxOrmValidators {
    interface ValidatorModules {
        required: FibjsEnforce.enforcementValidation;
        notEmptyString: FibjsEnforce.enforcementValidation;
        rangeNumber: FibjsEnforce.enforcementValidation;
        rangeLength: FibjsEnforce.enforcementValidation;
        insideList: FibjsEnforce.enforcementValidation;
        outsideList: FibjsEnforce.enforcementValidation;
        password: FibjsEnforce.enforcementValidation;
        patterns: FibjsEnforce.enforcementsContainer;
        equalToProperty(name: string, message?: string): FibjsEnforce.ValidationCallback;
        unique(opts?: {
            ignoreCase: boolean;
        }, message?: string): FibjsEnforce.ValidationCallback;
    }
    interface IValidatorHash {
        [validation: string]: FibjsEnforce.IValidator | FibjsEnforce.IValidator[];
    }
    interface ValidationCallback<T_THIS = any> extends FibjsEnforce.ValidationCallback {
        (value: any, next: FxOrmNS.NextCallback, thisArg?: T_THIS, contexts?: ValidatorContext): void;
    }
    interface ValidatorContext extends FibjsEnforce.ContextMap {
        driver: Class_ORM['driver'];
        instance: FxOrmInstance.Class_Instance;
        model: FxOrmModel.Class_Model;
    }
}
