import type { FibOrmSqlDDLSync__Column } from "./Column";
export declare namespace FibOrmSqlDDLSync__Collection {
    interface Collection {
        name: string;
        properties: {
            [k: string]: FibOrmSqlDDLSync__Column.Property;
        };
        [ext_k: string]: any;
    }
}
