import { default as sqlite } from './sqlite'
import { default as mysql } from './mysql'

import type { FxDbDriverNS } from '@fiborm/db-driver';
import type { FxOrmDDL } from '../../@types/DDL';

export function getDDL (
    type: FxDbDriverNS.Driver['type'],
): typeof FxOrmDDL.DDLDialect {
    switch (type) {
        case 'sqlite':
            return sqlite
        case 'mysql':
            return mysql
        default:
            throw new Error(`[getDDL] unsupported type: ${type}`)
    }
}