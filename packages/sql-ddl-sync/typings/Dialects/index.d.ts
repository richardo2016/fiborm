import type { FxOrmSqlDDLSync__Dialect } from '../@types/Dialect';
export import mysql = require('./mysql');
export import sqlite = require('./sqlite');
export declare const postgresql: FxOrmSqlDDLSync__Dialect.Dialect<any>;
export declare const mssql: FxOrmSqlDDLSync__Dialect.Dialect<any>;
