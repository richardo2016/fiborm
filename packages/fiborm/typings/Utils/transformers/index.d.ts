import type { FxDbDriverNS } from '@fiborm/db-driver';
import type { FxOrmDTransformer } from '../../@types/dtransformer';
export declare function getDataStoreTransformer(type: FxDbDriverNS.Driver['type']): FxOrmDTransformer.Transformer;
