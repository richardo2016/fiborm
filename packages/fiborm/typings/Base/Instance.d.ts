/// <reference types="@fibjs/types" />
import LinkedList from '../Utils/linked-list';
import type { FxOrmTypeHelpers } from '../@types/_common';
import type { FxOrmInstance } from '../@types/instance';
declare class Instance implements FxOrmInstance.Class_Instance {
    static isInstance(input: any): input is FxOrmInstance.Class_Instance;
    $event_emitter: FxOrmInstance.Class_Instance['$event_emitter'];
    $model: FxOrmInstance.Class_Instance['$model'];
    /**
     * only allow settting fields of Model.properties into it.
     */
    $kvs: FxOrmInstance.Class_Instance['$kvs'];
    $refs: FxOrmInstance.Class_Instance['$refs'];
    $bornsnapshot: FxOrmInstance.Class_Instance['$bornsnapshot'];
    $changes: {
        [filed_name: string]: LinkedList<{
            via_path: string;
            type: 'add' | 'update' | 'delete';
            prev_state: any;
            date: Date;
        }>;
    };
    get $changedFieldsCount(): number;
    get $saved(): boolean;
    get $isPersisted(): boolean;
    $$getWheres(): Record<string | number | symbol, any>;
    $isFieldFilled(x: string): boolean;
    $clearChanges(fieldName?: string | string[]): void;
    get $changedKeys(): string[];
    $isModelField(prop: string): boolean;
    $isEnumerable(prop: string): boolean;
    get $isInstance(): boolean;
    constructor(...args: FxOrmTypeHelpers.ConstructorParams<typeof FxOrmInstance.Class_Instance>);
    $on(...args: any[]): any;
    $off(...args: any[]): any;
    $emit(...args: any[]): any;
    $set(fieldname: string | string[], value: any): this;
    $fetch(): this;
    $get(fieldName: string | string[]): any;
    $save(dataset?: Fibjs.AnyObject): this;
    $fetchRef(): this;
    $getRef(refName: string | string[], opts?: FxOrmTypeHelpers.SecondParameter<FxOrmInstance.Class_Instance['$getRef']>): any;
    $hasRef(...opts: FxOrmTypeHelpers.Parameters<FxOrmInstance.Class_Instance['$hasRef']>): ReturnType<FxOrmInstance.Class_Instance['$hasRef']>;
    $saveRef(refName: string, dataset?: FxOrmTypeHelpers.ItOrListOfIt<Fibjs.AnyObject | FxOrmInstance.Class_Instance>): any;
    $addRef(refName: string, dataset?: FxOrmTypeHelpers.ItOrListOfIt<Fibjs.AnyObject | FxOrmInstance.Class_Instance>): any[];
    $remove(): void;
    $unlinkRef(...args: FxOrmTypeHelpers.Parameters<FxOrmInstance.Class_Instance['$unlinkRef']>): this;
    $exists(): boolean;
    toJSON(): FIBJS.GeneralObject;
    toString(): string;
    [k: string]: any;
}
export default Instance;
