/// <reference types="@fibjs/enforce" />

import type { FxOrmInstance } from "./instance";
import type { FxOrmModel } from "./model";
import type { Class_ORM } from "./ORM";
import type { FxOrmNS } from "./_common";

export namespace FxOrmValidators {
   export interface ValidatorModules {
        required: FibjsEnforce.enforcementValidation
        notEmptyString: FibjsEnforce.enforcementValidation
        rangeNumber: FibjsEnforce.enforcementValidation
        rangeLength: FibjsEnforce.enforcementValidation
        insideList: FibjsEnforce.enforcementValidation
        outsideList: FibjsEnforce.enforcementValidation
        password: FibjsEnforce.enforcementValidation

        patterns: FibjsEnforce.enforcementsContainer

        /* extra validators: start */
        equalToProperty(name: string, message?: string): FibjsEnforce.ValidationCallback;
        unique(opts?: { ignoreCase: boolean }, message?: string): FibjsEnforce.ValidationCallback;
        /* extra validators: end */
   }

   export interface IValidatorHash {
      [validation: string]: FibjsEnforce.IValidator | FibjsEnforce.IValidator[]
   }

   export interface ValidationCallback<T_THIS = any> extends FibjsEnforce.ValidationCallback {
      (value: any, next: FxOrmNS.NextCallback, thisArg?: T_THIS, contexts?: ValidatorContext): void;
   }

   export interface ValidatorContext extends FibjsEnforce.ContextMap {
      driver: Class_ORM['driver']
      instance: FxOrmInstance.Class_Instance
      model: FxOrmModel.Class_Model
   }
}