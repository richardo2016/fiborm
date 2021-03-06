import type { FxDbDriverNS } from "./type";
export declare function driverUUid(): string;
export declare function filterDriverType(protocol: any): FxDbDriverNS.DriverType;
export declare function forceInteger(input: any, fallback: number): number;
export declare function castQueryStringToBoolean(input: any): boolean;
export declare function ensureSuffix(str?: string, suffix?: string): string;
export declare function parseConnectionString(input: any): FxDbDriverNS.DBConnectionConfig;
export declare function parsePoolConfig(input: boolean | FxDbDriverNS.ConnectionPoolOptions | any): FxDbDriverNS.ConnectionPoolOptions;
export declare function mountPoolToDriver(driver: FxDbDriverNS.Driver, poolSetting?: any): void;
export declare function arraify<T = any>(item: T | T[]): T[];
