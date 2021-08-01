/**
 * @description Settings is one global/local setting deep key-value management tools
 *
 * ```Javascript
 * const settings = new Settings({})
 *
 * settings.set('a', 'foo')
 * settings.get('a') // foo
 * settings.get('a.a') // undefined
 *
 * settings.set('a.b', 'foo1')
 * settings.get('a.b') // 'foo1'
 * settings.get('a.b.c') // undefined
 *
 * settings.set('a.b', 'foo1')
 * settings.get('a.b') // 'foo1'
 * settings.unset('a.b') // 'foo1'
 * settings.get('a.b') // undefined
 * ```
 */
declare class Settings {
    private _kvs;
    constructor(initKvs: Settings['_kvs']);
    set(k: string, v: any): void;
    get(k: string, _default: any): any;
    unset(...ks: any[]): void;
    toJSON(): any;
    clone(): Settings;
}
export default Settings;
