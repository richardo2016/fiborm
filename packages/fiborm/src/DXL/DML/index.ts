import sqlite from './sqlite'
import mysql from './mysql'

import type { FxDbDriverNS } from '@fiborm/db-driver'
import type { FxOrmDML } from '../../@types/DML'

export function getDML (
    type: FxDbDriverNS.Driver['type'],
): (typeof FxOrmDML.DMLDialect) {
    switch (type) {
        case 'sqlite':
            return sqlite as (typeof FxOrmDML.DMLDialect) as any
        case 'mysql':
            return mysql as (typeof FxOrmDML.DMLDialect) as any
        default:
            throw new Error(`[getDML] unsupported type: ${type}`)
    }
}
