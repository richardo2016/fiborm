import type { FxOrmTypeHelpers } from "../@types/_common";
export declare function arraify<T = any>(item: T | T[]): T[];
export declare function idify<T = any>(item: T | T[]): T;
export declare function preDestruct(input: any[]): any[];
export declare function postDestruct(input: any[]): any[];
export declare function isEmptyArray(input: any): boolean;
/**
 * @description get memory-page ranges
 *
 * @param count
 * @param pageSize
 */
export declare function getPageRanges(count?: number, pageSize?: number): number[][];
export declare function deduplication(input: any[], get_id: (item: FxOrmTypeHelpers.FlattenIfArray<typeof input>, idx: number) => string | number): typeof input;
