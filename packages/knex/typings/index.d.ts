/// <reference types="@fibjs/types" />
import type { IGetKnex, KnexInstance, KnexNS } from '../typings/migrating/index';
declare const OKnex: IGetKnex & {
    SandBox: typeof Class_SandBox;
};
export default OKnex;
export { KnexInstance };
export { KnexNS };
