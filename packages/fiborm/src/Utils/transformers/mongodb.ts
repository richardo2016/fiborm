import type { FxOrmDTransformer } from "../../@types/dtransformer";
import type { FxOrmProperty } from "../../@types/property";

module MongoDB {
    export const storeType = 'mongodb'

    export function valueToProperty(
        value: any,
        property: FxOrmProperty.NormalizedProperty,
        customTypes: FxOrmDTransformer.CustomTypes
    ) {
        return value;
    }
    export function propertyToStoreValue(
        value: any,
        property: FxOrmProperty.NormalizedProperty,
        customTypes: FxOrmDTransformer.CustomTypes
    ) {
        return value;
    }
}

export = MongoDB as FxOrmDTransformer.Transformer
