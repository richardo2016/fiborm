export function hasCollection(driver: any, name: any, cb: any): void;
export function getCollectionProperties(driver: any, name: any, cb: any): void;
export function createCollection(driver: any, name: any, columns: any, keys: any, cb: any): any;
export function dropCollection(driver: any, name: any, cb: any): any;
export function addPrimaryKey(driver: any, tableName: any, columnName: any, cb: any): any;
export function dropPrimaryKey(driver: any, tableName: any, columnName: any, cb: any): any;
export function addForeignKey(driver: any, tableName: any, options: any, cb: any): any;
export function dropForeignKey(driver: any, tableName: any, columnName: any, cb: any): any;
export function addCollectionColumn(driver: any, name: any, column: any, afterColumn: any, cb: any): any;
export function renameCollectionColumn(driver: any, name: any, oldColName: any, newColName: any, cb: any): any;
export function modifyCollectionColumn(driver: any, name: any, column: any, cb: any): any;
export function dropCollectionColumn(driver: any, name: any, column: any, cb: any): any;
export function getCollectionIndexes(driver: any, name: any, cb: any): void;
export function addIndex(driver: any, name: any, unique: any, collection: any, columns: any, cb: any): any;
export function removeIndex(driver: any, collection: any, name: any, cb: any): any;
export function convertIndexes(collection: any, indexes: any): any;
export function getType(collection: any, property: any, driver: any): false | {
    value: boolean;
    before: boolean;
};
