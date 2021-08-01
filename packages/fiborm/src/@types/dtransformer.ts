import type { FxOrmModel } from "./model";
import type { FxOrmProperty } from "./property";

export namespace FxOrmDTransformer {
    export type CustomTypes = Record<keyof any, FxOrmProperty.CustomPropertyType>

    export interface Transformer {
        storeType: 'sqlite' | 'mysql' | 'mongodb' | string

        /**
         * @description ONLY transform data value in remote to local format
         *
         * @param value
         * @param property
         * @param customTypes
         */
        valueToProperty (value: any, property: FxOrmModel.Class_Model['properties'][any], customTypes: CustomTypes): any

        /**
         * @description ONLY transform local data value to remote format
         *
         * @param propertyValue
         * @param property
         * @param customTypes
         */
        propertyToStoreValue (propertyValue: any, property: FxOrmModel.Class_Model['properties'][any], customTypes: CustomTypes): any
    }
}
