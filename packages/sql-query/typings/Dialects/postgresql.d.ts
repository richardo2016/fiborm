export namespace DataTypes {
    const id: string;
    const int: string;
    const float: string;
    const bool: string;
    const text: string;
}
export var type: string;
export function escape(query: any, args: any): string;
export function escapeId(...args: any[]): any;
export function escapeVal(val: any, timeZone: any): any;
export var defaultValuesStmt: string;
