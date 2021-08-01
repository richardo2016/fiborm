/// <reference types="@fibjs/types" />
declare const EventEmitter: typeof Class_EventEmitter;
import Setting from './Setting';
import Property from './Property';
import { getDML } from '../DXL/DML';
import { getDDL } from '../DXL/DDL';
import type { FxOrmTypeHelpers } from '../@types/_common';
import type { Class_ORM } from '../@types/ORM';
import type { FxOrmQueries } from '../@types/Queries';
import type { FxOrmModel } from '../@types/model';
import type { FxOrmProperty } from '../@types/property';
import type { FxORMPlugin } from '../@types/plugin';
declare class ORM<ConnType = any> extends EventEmitter implements Class_ORM {
    static Op: {
        and: symbol;
        or: symbol;
        gt: symbol;
        gte: symbol;
        lt: symbol;
        lte: symbol;
        ne: symbol;
        eq: symbol;
        is: symbol;
        not: symbol;
        between: symbol;
        notBetween: symbol;
        in: symbol;
        notIn: symbol;
        like: symbol;
        notLike: symbol;
        startsWith: symbol;
        endsWith: symbol;
        substring: symbol;
        colref: symbol;
    };
    static Opf: {
        and: (value?: any) => FxOrmQueries.OperatorFunction<"and">;
        or: (value?: any) => FxOrmQueries.OperatorFunction<"or">;
        gt: (value?: any) => FxOrmQueries.OperatorFunction<"gt">;
        gte: (value?: any) => FxOrmQueries.OperatorFunction<"gte">;
        lt: (value?: any) => FxOrmQueries.OperatorFunction<"lt">;
        lte: (value?: any) => FxOrmQueries.OperatorFunction<"lte">;
        ne: (value?: any) => FxOrmQueries.OperatorFunction<"ne">;
        eq: (value?: any) => FxOrmQueries.OperatorFunction<"eq">;
        is: (value?: any) => FxOrmQueries.OperatorFunction<"is">;
        not: (value?: any) => FxOrmQueries.OperatorFunction<"not">;
        between: (value?: any) => FxOrmQueries.OperatorFunction<"between">;
        notBetween: (value?: any) => FxOrmQueries.OperatorFunction<"notBetween">;
        in: (value?: any) => FxOrmQueries.OperatorFunction<"in">;
        notIn: (value?: any) => FxOrmQueries.OperatorFunction<"notIn">;
        like: (value?: any) => FxOrmQueries.OperatorFunction<"like">;
        notLike: (value?: any) => FxOrmQueries.OperatorFunction<"notLike">;
        startsWith: (value?: any) => FxOrmQueries.OperatorFunction<"startsWith">;
        endsWith: (value?: any) => FxOrmQueries.OperatorFunction<"endsWith">;
        substring: (value?: any) => FxOrmQueries.OperatorFunction<"substring">;
        colref: (value?: any) => FxOrmQueries.OperatorFunction<"colref">;
    };
    static Ql: {
        Operators: {
            and: symbol;
            or: symbol;
            gt: symbol;
            gte: symbol;
            lt: symbol;
            lte: symbol;
            ne: symbol;
            eq: symbol;
            is: symbol;
            not: symbol;
            between: symbol;
            notBetween: symbol;
            in: symbol;
            notIn: symbol;
            like: symbol;
            notLike: symbol;
            startsWith: symbol;
            endsWith: symbol;
            substring: symbol;
            colref: symbol;
        };
        Others: {
            bracketRound: symbol;
            bracketSquare: symbol;
            bracketBrace: symbol;
            quoteSingle: symbol;
            quoteDouble: symbol;
            quoteBack: symbol;
        };
    };
    static Qlfn: {
        Operators: {
            and: (value?: any) => FxOrmQueries.OperatorFunction<"and">;
            or: (value?: any) => FxOrmQueries.OperatorFunction<"or">;
            gt: (value?: any) => FxOrmQueries.OperatorFunction<"gt">;
            gte: (value?: any) => FxOrmQueries.OperatorFunction<"gte">;
            lt: (value?: any) => FxOrmQueries.OperatorFunction<"lt">;
            lte: (value?: any) => FxOrmQueries.OperatorFunction<"lte">;
            ne: (value?: any) => FxOrmQueries.OperatorFunction<"ne">;
            eq: (value?: any) => FxOrmQueries.OperatorFunction<"eq">;
            is: (value?: any) => FxOrmQueries.OperatorFunction<"is">;
            not: (value?: any) => FxOrmQueries.OperatorFunction<"not">;
            between: (value?: any) => FxOrmQueries.OperatorFunction<"between">;
            notBetween: (value?: any) => FxOrmQueries.OperatorFunction<"notBetween">;
            in: (value?: any) => FxOrmQueries.OperatorFunction<"in">;
            notIn: (value?: any) => FxOrmQueries.OperatorFunction<"notIn">;
            like: (value?: any) => FxOrmQueries.OperatorFunction<"like">;
            notLike: (value?: any) => FxOrmQueries.OperatorFunction<"notLike">;
            startsWith: (value?: any) => FxOrmQueries.OperatorFunction<"startsWith">;
            endsWith: (value?: any) => FxOrmQueries.OperatorFunction<"endsWith">;
            substring: (value?: any) => FxOrmQueries.OperatorFunction<"substring">;
            colref: (value?: any) => FxOrmQueries.OperatorFunction<"colref">;
        };
        Selects: {
            join: (value?: any) => FxOrmQueries.OperatorFunction<"join">;
            leftJoin: (value?: any) => FxOrmQueries.OperatorFunction<"leftJoin">;
            leftOuterJoin: (value?: any) => FxOrmQueries.OperatorFunction<"leftOuterJoin">;
            rightJoin: (value?: any) => FxOrmQueries.OperatorFunction<"rightJoin">;
            rightOuterJoin: (value?: any) => FxOrmQueries.OperatorFunction<"rightOuterJoin">;
            innerJoin: (value?: any) => FxOrmQueries.OperatorFunction<"innerJoin">;
            fullOuterJoin: (value?: any) => FxOrmQueries.OperatorFunction<"fullOuterJoin">;
        };
        Others: {
            /**
             * @TODO: check why `this.modelDefinitions` is not correct in `.useTrans` callback?
             */
            bracketRound: (value?: any) => FxOrmQueries.OperatorFunction<"bracketRound">;
            bracketSquare: (value?: any) => FxOrmQueries.OperatorFunction<"bracketSquare">;
            bracketBrace: (value?: any) => FxOrmQueries.OperatorFunction<"bracketBrace">;
            quoteSingle: (value?: any) => FxOrmQueries.OperatorFunction<"quoteSingle">;
            quoteDouble: (value?: any) => FxOrmQueries.OperatorFunction<"quoteDouble">;
            quoteBack: (value?: any) => FxOrmQueries.OperatorFunction<"quoteBack">;
            refTableCol: (value?: any) => FxOrmQueries.OperatorFunction<"refTableCol">;
        };
    };
    static Property: typeof Property;
    static create(connection: FxOrmTypeHelpers.ConstructorParams<typeof Class_ORM>[0]): ORM<any>;
    static connect(connection: FxOrmTypeHelpers.ConstructorParams<typeof Class_ORM>[0]): ORM<any>;
    static parseHQL(...args: FxOrmTypeHelpers.Parameters<(typeof Class_ORM)['parseHQL']>): FxOrmQueries.HqLNormalizer;
    settings: Setting;
    models: Class_ORM['models'];
    modelDefinitions: Class_ORM['modelDefinitions'];
    customPropertyTypes: Class_ORM['customPropertyTypes'];
    $dml: FxOrmTypeHelpers.InstanceOf<ReturnType<typeof getDML>>;
    $ddl: FxOrmTypeHelpers.InstanceOf<ReturnType<typeof getDDL>>;
    $context: any;
    driver: Class_ORM['driver'];
    connection: Class_ORM['connection'];
    constructor(...args: FxOrmTypeHelpers.ConstructorParams<typeof Class_ORM>);
    /**
     * @description load plugin, affect all models.
     * @param pluginConfig
     */
    use(pluginConfig: string | FxORMPlugin.PluginOptions): void;
    define(name: string, properties: Fibjs.AnyObject, config?: FxOrmModel.Class_ModelDefinitionOptions): FxOrmModel.Class_Model;
    defineType(...args: Parameters<Class_ORM['defineType']>): {
        datastoreType: (prop?: FxOrmProperty.Class_Property<any>, opts?: {
            collection: string;
            driver: import("@fiborm/db-driver").FxDbDriverNS.Driver<any>;
        }) => string;
        valueToProperty: (value?: any, prop?: FxOrmProperty.Class_Property<any>) => any;
        propertyToStoreValue: (propertyValue?: any, prop?: FxOrmProperty.Class_Property<any>) => any;
    };
    useTrans(callback: (orm: Class_ORM) => void): void;
    /**
     * @description sync all model in this.models to remote endpoints
     */
    sync(): void;
    /**
     * @description sync all model in this.models from remote endpoints
     */
    drop(): void;
    close(): void;
}
export default ORM;
