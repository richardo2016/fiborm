import type { IGetKnex, KnexInstance, KnexNS } from '../typings/migrating/index'

import SandBox from './sandbox'

const sandbox = new SandBox()
const OKnex: IGetKnex & {
    SandBox: typeof Class_SandBox,
} = sandbox.require('knex', __dirname)

OKnex.SandBox = SandBox

export default OKnex;

export { KnexInstance };
export { KnexNS };