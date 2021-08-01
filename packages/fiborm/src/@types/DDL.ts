import type { KnexInstance } from "@fiborm/knex";
import type { FxOrmDXL } from "./DXL";

export namespace FxOrmDDL {
  export type KnexSchemaBuilder = KnexInstance['schema'];

  export declare class DDLDialect<ConnType = any> extends FxOrmDXL.DXLDialect<ConnType> {
    // uid: string
    createCollection: <T = Fibjs.AnyObject[]>(collection: string, opts?: FxOrmDXL.OptionsCommon<ConnType>) => T
    alertCollection: <T = any>(collection: string, opts?: FxOrmDXL.OptionsCommon<ConnType>) => T
    truncateCollection: <T = any>(collection: string, opts?: FxOrmDXL.OptionsCommon<ConnType>) => T
    commentCollection: <T = any>(collection: string, opts?: FxOrmDXL.OptionsCommon<ConnType>) => T
    dropCollection: (collection: string, opts?: FxOrmDXL.OptionsCommon<ConnType>) => void
    renameCollection: <T = number>(collection: string, opts?: FxOrmDXL.OptionsCommon<ConnType>) => T
  }
}
