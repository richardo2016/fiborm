import type { FxOrmSqlDDLSync__Dialect } from '../@types/Dialect'

export import mysql = require('./mysql')
export import sqlite = require('./sqlite')

// @ts-ignore
import _postgresql = require('./postgresql')
export const postgresql = _postgresql as FxOrmSqlDDLSync__Dialect.Dialect;

export const mssql = null as FxOrmSqlDDLSync__Dialect.Dialect