import type { FibOrmSqlDDLSync__Column } from "./Column";

export namespace FibOrmSqlDDLSync__Collection {
    export interface Collection {
        // table name
        name: string
        properties: {
            [k: string]: FibOrmSqlDDLSync__Column.Property
        }
        
        [ext_k: string]: any
    }
}