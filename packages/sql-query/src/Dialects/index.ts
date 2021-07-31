import * as mysql from './mysql'
export { mysql }

// @ts-ignore
import * as _postgresql from './postgresql'
export const postgresql = _postgresql as any as FxSqlQueryDialect.Dialect;

import * as sqlite from './sqlite'
export { sqlite }

import * as mssql from './mssql'
export { mssql }
