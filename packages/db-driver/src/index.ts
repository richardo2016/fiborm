import { Driver } from './built-ins/base.class';

export {
    Driver,
    SQLDriver,
} from './built-ins/base.class'

export const create = Driver.create;
export const getDriver = Driver.getDriver;

export { FxDbDriverNS, FxDbDriver__Driver_SQLShared } from './type';