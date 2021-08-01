/// <reference types="@fibjs/types" />
import type { KnexInstance } from '@fiborm/knex';
import type { FxOrmDXL } from './DXL';
import type { FxOrmProperty } from './property';
import type { FxOrmQueries } from './Queries';
import type { FxOrmTypeHelpers } from './_common';
export declare namespace FxOrmDML {
    type KnexQueryBuilder = FxOrmTypeHelpers.ReturnType<KnexInstance['queryBuilder']>;
    type BeforeQueryItem = (builer: KnexQueryBuilder, ctx: {
        dml: DMLDialect;
        knex: KnexInstance;
    }) => typeof builer | void;
    class DMLDialect<CONN_TYPE = any> extends FxOrmDXL.DXLDialect<CONN_TYPE> {
        find: {
            <T = Fibjs.AnyObject[]>(collection: string, opts?: {
                $dml?: FxOrmDML.DMLDialect;
                where?: Fibjs.AnyObject;
                joins?: FxOrmQueries.OperatorFunction[];
                fields?: string[];
                select?: {
                    [k: string]: string;
                };
                offset?: FxOrmTypeHelpers.FirstParameter<KnexInstance['offset']>;
                limit?: FxOrmTypeHelpers.FirstParameter<KnexInstance['limit']>;
                orderBy?: FxOrmTypeHelpers.Parameters<KnexInstance['orderBy']>;
                beforeQuery?: FxOrmTypeHelpers.ItOrListOfIt<BeforeQueryItem>;
                filterQueryResult?: <T2 = any>(result: any) => T2;
            } & FxOrmDXL.OptionsCommon<CONN_TYPE>): T;
        };
        count: {
            <T = number>(collection: string, opts?: {
                connection?: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect['find']>['connection'];
                where?: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect['find']>['where'];
                joins?: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect['find']>['joins'];
                fields?: string[];
                select?: {
                    [k: string]: string;
                };
                countParams?: FxOrmTypeHelpers.Parameters<KnexInstance['count']>;
                beforeQuery?: FxOrmTypeHelpers.ItOrListOfIt<BeforeQueryItem>;
                filterQueryResult?: <T2 = any>(result: any) => T2;
            }): number;
        };
        exists: {
            <T = boolean>(collection: string, opts?: {
                connection?: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect['find']>['connection'];
                where?: Fibjs.AnyObject;
                beforeQuery?: FxOrmTypeHelpers.ItOrListOfIt<BeforeQueryItem>;
                filterQueryResult?: <T2 = any>(result: any) => T2;
            }): boolean;
        };
        insert: {
            (collection: string, data: FxSqlQuerySql.DataToSet, opts?: {
                connection?: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect['find']>['connection'];
                idPropertyList?: FxOrmProperty.Class_Property[];
                beforeQuery?: FxOrmTypeHelpers.ItOrListOfIt<BeforeQueryItem>;
            }): Fibjs.AnyObject;
        };
        update: {
            <T = any>(collection: string, changes: FxSqlQuerySql.DataToSet, opts?: {
                connection?: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect['find']>['connection'];
                where?: Fibjs.AnyObject;
                beforeQuery?: FxOrmTypeHelpers.ItOrListOfIt<BeforeQueryItem>;
            }): T;
        };
        remove: {
            <T = number>(collection: string, opts?: {
                connection?: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect['find']>['connection'];
                where: Fibjs.AnyObject;
                beforeQuery?: FxOrmTypeHelpers.ItOrListOfIt<BeforeQueryItem>;
            }): T;
        };
        clear: {
            <T = any>(collection: string, opts?: {
                connection?: FxOrmTypeHelpers.SecondParameter<FxOrmDML.DMLDialect['find']>['connection'];
            }): T;
        };
    }
}
