import sqlite = require('./sqlite')
import mysql = require('./mysql')
import mongodb = require('./mongodb')

import type { FxDbDriverNS } from '@fiborm/db-driver'
import type { FxOrmDTransformer } from '../../@types/dtransformer'

export function getDataStoreTransformer (
    type: FxDbDriverNS.Driver['type'],
): FxOrmDTransformer.Transformer {
    switch (type) {
        case 'sqlite':
            return sqlite
        case 'mysql':
            return mysql
        case 'mongodb':
            return mongodb
        default:
            throw new Error(`[getDataStoreTransformer] unsupported type: ${type}`)
    }
}
