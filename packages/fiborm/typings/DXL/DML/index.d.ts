import type { FxDbDriverNS } from '@fiborm/db-driver';
import type { FxOrmDML } from '../../@types/DML';
export declare function getDML(type: FxDbDriverNS.Driver['type']): (typeof FxOrmDML.DMLDialect);
