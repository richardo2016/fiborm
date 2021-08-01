/// <reference types="@fibjs/types" />
export declare function setTarget(key: string, value: any, target: Fibjs.AnyObject): any;
export declare function getFrom(key: string, def: any, target: {
    [k: string]: any;
}): any;
export declare function unsetTarget(key: string, obj: any): 'reset' | undefined;
