/// <reference types="@fibjs/types" />

import { Dialects } from '@fiborm/sql-query';

import type { FxDbDriverNS } from "../../db-driver";

import type { FibOrmSqlDDLSync } from "./@types";
import type { FibOrmSqlDDLSync__Collection } from "./@types/Collection";
import type { FibOrmSqlDDLSync__Column } from "./@types/Column";

export function logJson (group: string, detail: any) {
    let json = null;
    try {
        json = JSON.stringify(detail, null, '\t');
    } catch (e) {
        throw 'Error occured when trying to log detail';
    }
    
    if (process.env.DEBUG)
        console.notice(json)

    return json
}

export function getSqlQueryDialect (type: FxDbDriverNS.DriverType){
	return (Dialects as any)[type] as any as FxSqlQueryDialect.Dialect;
}

export function arraify<T = any> (item: T | T[]): T[] {
	return Array.isArray(item) ? item : [item]
}

export function getCollectionMapsTo_PropertyNameDict (collection: FibOrmSqlDDLSync__Collection.Collection) {
    const hash = <{[k: string]: string}>{}

    Object.keys(collection.properties).forEach(pname => {
        const prop = collection.properties[pname]
        if (prop.mapsTo)
            hash[prop.mapsTo] = pname
    })

    return hash;
}

export function filterPropertyDefaultValue (
    property: FibOrmSqlDDLSync__Column.Property,
    ctx: {
        collection: string,
        property: FibOrmSqlDDLSync__Column.Property,
        driver: FxDbDriverNS.Driver
    }
) {
    let _dftValue
    if (property.hasOwnProperty('defaultValue'))
        if (typeof property.defaultValue === 'function') {
            _dftValue = property.defaultValue(ctx)
        } else
            _dftValue = property.defaultValue

    return _dftValue
}

export function filterSyncStrategy (
    strategy: FibOrmSqlDDLSync.SyncCollectionOptions['strategy']
) {
    switch (strategy) {
        case 'hard':
        case 'soft':
        case 'mixed':
            break
        default:
            strategy = 'soft'
            break
    }
    return strategy
}

export function filterSuppressColumnDrop (
    suppressColumnDrop: boolean, db_type: FibOrmSqlDDLSync.Sync['dbdriver']['type']
) {
    if (db_type === 'sqlite')
        return true

    return !!suppressColumnDrop
}