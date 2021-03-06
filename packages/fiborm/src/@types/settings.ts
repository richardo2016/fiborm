export namespace FxOrmSettings {
    export interface SettingsContainerGenerator {
        (options: object): SettingInstance
    }

    export interface SettingInstance {
        set(key: string, value: any): SettingInstance
        get(key: string, def?: Function): any
        unset(): SettingInstance
    }

    export declare class Settings {
        constructor(settings: any);
        
        static Container: any;

        static defaults(): {
            properties: {
                primary_key: string;
                required: boolean;
            };

            instance: {
                identityCache: boolean;
                identityCacheSaveCheck: boolean;
                autoSave: boolean;
                autoFetch: boolean;
                cascadeRemove: boolean;
                returnAllErrors: boolean;
            };

            connection: {
                reconnect: boolean;
                poll: boolean;
                debug: boolean;
            };
        };
    }

    export var settings: SettingInstance;

}