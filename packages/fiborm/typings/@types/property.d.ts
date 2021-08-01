import type { FxDbDriverNS } from "@fiborm/db-driver";
import type { FibOrmSqlDDLSync__Column } from "@fiborm/sql-ddl-sync";
import type { FxOrmModel } from "./model";
export declare namespace FxOrmProperty {
    interface CustomPropertyType {
        datastoreType?: {
            (prop?: FxOrmProperty.Class_Property, opts?: {
                collection: string;
                driver: FxDbDriverNS.Driver<any>;
            }): string;
        };
        valueToProperty?: {
            (value?: any, prop?: FxOrmProperty.Class_Property): any;
        };
        propertyToStoreValue?: {
            (propertyValue?: any, prop?: FxOrmProperty.Class_Property): any;
        };
    }
    /**
     * @description useful when pass property's option(such as type, big, ...etc) internally, useless for exposed api.
     */
    interface NormalizedProperty {
        name: string;
        type: FibOrmSqlDDLSync__Column.Property['type'];
        key: FibOrmSqlDDLSync__Column.Property['key'];
        mapsTo: FibOrmSqlDDLSync__Column.Property['mapsTo'];
        unique: FibOrmSqlDDLSync__Column.Property['unique'];
        index: FibOrmSqlDDLSync__Column.Property['index'];
        serial: FibOrmSqlDDLSync__Column.Property['serial'];
        unsigned: FibOrmSqlDDLSync__Column.Property['unsigned'];
        primary: FibOrmSqlDDLSync__Column.Property['primary'];
        required: FibOrmSqlDDLSync__Column.Property['required'];
        defaultValue: undefined | FibOrmSqlDDLSync__Column.Property['defaultValue'];
        size: FibOrmSqlDDLSync__Column.Property['size'];
        rational: FibOrmSqlDDLSync__Column.Property['rational'];
        time: FibOrmSqlDDLSync__Column.Property['time'];
        big: FibOrmSqlDDLSync__Column.Property['big'];
        values: FibOrmSqlDDLSync__Column.Property['values'];
        lazyload: boolean;
        lazyname: string;
        enumerable: boolean;
        /**
         * @description if joinNode is not empty, which means this property is used as join key between
         * collections
         */
        joinNode: {
            /**
             * @description column name of this property refered
             */
            refColumn: string;
            /**
             * @description if refCollection if empty, (maybe) this property was used in where its located
             */
            refCollection?: string;
        };
        [ext_k: string]: any;
    }
    class Class_Property<T_CTX extends FxOrmModel.Class_Model['propertyContext'] = any> implements NormalizedProperty {
        $storeType: FxDbDriverNS.Driver<any>['type'];
        $ctx: T_CTX;
        name: string;
        type: NormalizedProperty['type'];
        key: NormalizedProperty['key'];
        mapsTo: NormalizedProperty['mapsTo'];
        unique: NormalizedProperty['unique'];
        index: NormalizedProperty['index'];
        serial: NormalizedProperty['serial'];
        unsigned: NormalizedProperty['unsigned'];
        primary: NormalizedProperty['primary'];
        required: NormalizedProperty['required'];
        defaultValue: NormalizedProperty['defaultValue'];
        size: NormalizedProperty['size'];
        rational: NormalizedProperty['rational'];
        time: NormalizedProperty['time'];
        big: NormalizedProperty['big'];
        values: NormalizedProperty['values'];
        lazyload: NormalizedProperty['lazyload'];
        lazyname: NormalizedProperty['lazyname'];
        enumerable: NormalizedProperty['enumerable'];
        /**
         * @description if joinNode is not empty, which means this property is used as join key between
         * collections
         */
        joinNode: FxOrmProperty.NormalizedProperty['joinNode'];
        transformer: {
            valueToProperty?: FxOrmProperty.CustomPropertyType['valueToProperty'];
            propertyToStoreValue?: FxOrmProperty.CustomPropertyType['propertyToStoreValue'];
        };
        static isProperty(input: any): input is FxOrmProperty.Class_Property;
        static normalize(input: any, 
        /**
         * @description property key name in properties dictionary
         */
        prop_name: string): NormalizedProperty;
        constructor(input: any, opts?: {
            propertyName: string;
            storeType: FxOrmProperty.Class_Property['$storeType'];
            $ctx?: FxOrmProperty.Class_Property['$ctx'];
        });
        fromInputValue(storeValue: any): any;
        toStoreValue(value: any): any;
        useDefaultValue(ctx: T_CTX): any;
        /**
         * @description get one normalized non-key property snapshot
         */
        deKeys(opts?: {
            removeIndexes?: boolean;
        }): NormalizedProperty;
        /**
         * @description if this is one key-property, which is:
         * `property.key === true`
         * or `property.primary === true`
         * or `property.type === 'serial'`
         */
        isKeyProperty(): boolean;
        isSerial(): boolean;
        isIncrementable(): boolean;
        setMeta(metaKey: keyof NormalizedProperty, metaValue: any): this;
        rebuildTo(opts: {
            name: Class_Property['name'];
            mapsTo?: Class_Property['mapsTo'];
            lazyname?: Class_Property['lazyname'];
        }): Class_Property;
        useAsJoinColumn(opts: Class_Property | {
            column: string;
            collection?: string;
        }): this;
        isJoinProperty(): boolean;
        toJSON(): NormalizedProperty;
    }
    interface NormalizedPropertyHash {
        [key: string]: NormalizedProperty;
    }
    interface FieldToPropertyMapType {
        [f_name: string]: NormalizedProperty;
    }
}
