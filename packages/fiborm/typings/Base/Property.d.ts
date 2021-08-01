import type { FxDbDriverNS } from '../../../db-driver/typings';
import type { FxOrmModel } from '../@types/model';
import type { FxOrmProperty } from '../@types/property';
import type { FxOrmTypeHelpers } from '../@types/_common';
declare function filterComplexPropertyDefinition(input: any, 
/**
 * @description property key name in properties dictionary
 */
prop_name: string): FxOrmProperty.NormalizedProperty;
export default class Property<T_CTX extends FxOrmModel.Class_Model['propertyContext'] = any> implements FxOrmProperty.Class_Property<T_CTX> {
    static isProperty(input: any): input is FxOrmProperty.Class_Property;
    static normalize: typeof filterComplexPropertyDefinition;
    $storeType: FxDbDriverNS.Driver<any>['type'];
    $ctx: FxOrmProperty.Class_Property<T_CTX>['$ctx'];
    name: FxOrmProperty.Class_Property['name'];
    type: FxOrmProperty.Class_Property['type'];
    key: FxOrmProperty.Class_Property['key'];
    mapsTo: FxOrmProperty.Class_Property['mapsTo'];
    unique: FxOrmProperty.Class_Property['unique'];
    index: FxOrmProperty.Class_Property['index'];
    serial: FxOrmProperty.Class_Property['serial'];
    unsigned: FxOrmProperty.Class_Property['unsigned'];
    primary: FxOrmProperty.Class_Property['primary'];
    required: FxOrmProperty.Class_Property['required'];
    defaultValue: FxOrmProperty.Class_Property['defaultValue'];
    size: FxOrmProperty.Class_Property['size'];
    rational: FxOrmProperty.Class_Property['rational'];
    time: FxOrmProperty.Class_Property['time'];
    big: FxOrmProperty.Class_Property['big'];
    values: FxOrmProperty.Class_Property['values'];
    lazyload: FxOrmProperty.Class_Property['lazyload'];
    lazyname: FxOrmProperty.Class_Property['lazyname'];
    enumerable: FxOrmProperty.Class_Property['enumerable'];
    joinNode: FxOrmProperty.Class_Property['joinNode'];
    $definition: FxOrmProperty.NormalizedProperty;
    transformer: FxOrmProperty.Class_Property['transformer'];
    constructor(...args: FxOrmTypeHelpers.ConstructorParams<typeof FxOrmProperty.Class_Property>);
    fromInputValue(storeValue: any): any;
    toStoreValue(value: any): any;
    useDefaultValue(ctx: Parameters<FxOrmProperty.Class_Property<T_CTX>['useDefaultValue']>[0]): any;
    deKeys({ removeIndexes }?: {
        removeIndexes?: boolean;
    }): FxOrmProperty.NormalizedProperty;
    setMeta(...args: FxOrmTypeHelpers.Parameters<FxOrmProperty.Class_Property['setMeta']>): this;
    rebuildTo({ name, mapsTo, lazyname }: FxOrmTypeHelpers.FirstParameter<FxOrmProperty.Class_Property['rebuildTo']>): Property<T_CTX>;
    isKeyProperty(): boolean;
    isSerial(): boolean;
    isIncrementable(): boolean;
    useAsJoinColumn(opts: FxOrmTypeHelpers.FirstParameter<FxOrmProperty.Class_Property['useAsJoinColumn']>): this;
    isJoinProperty(): boolean;
    toJSON(): FxOrmProperty.NormalizedProperty;
}
export {};
