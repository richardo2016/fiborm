import type { FxDbDriverNS } from '@fiborm/db-driver';
import type { FxOrmDDL } from '../../@types/DDL';
export declare function getDDL(type: FxDbDriverNS.Driver['type']): typeof FxOrmDDL.DDLDialect;
