import type { FibOrmSqlDDLSync__Dialect } from '../Typo/Dialect';
export import mysql = require('./mysql');
export import sqlite = require('./sqlite');
export declare const postgresql: FibOrmSqlDDLSync__Dialect.Dialect<any>;
export declare const mssql: FibOrmSqlDDLSync__Dialect.Dialect<any>;
