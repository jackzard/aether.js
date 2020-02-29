/**
 * Nested Get for object
 * NG(obj, 'path1.path2')
 * @param obj
 * @param key
 * @param initial
 * @constructor
 */
export function NG<T = any>(obj = {}, key = '', initial = undefined): T {
    const value = key.split('.')
        .reduce(function (o, x) {
            return (typeof o === 'undefined' || o === null) ? o : o[x]
        }, obj)
    if (typeof value === 'undefined') return initial
    return value
}

/**
 * Nested Set for object
 * NS(obj, 'path1.path2',true)
 * @param obj
 * @param path
 * @param value
 * @constructor
 */
export function NS<T = any>(obj: any, path: string, value: any): T {
    let schema = obj
    const pList = path.split('.')
    const len = pList.length
    for (let i = 0; i < len - 1; i++) {
        const elem = pList[i]
        if (!schema[elem]) schema[elem] = {}
        schema = schema[elem]
    }
    schema[pList[len - 1]] = value
    return obj
}

/**
 * Iterage as array in object
 * @param obj
 * @param cb
 * @constructor
 */
export function LoopObject<T, K extends keyof T>(obj: T, cb: (val: T[Extract<keyof T, string>], key: string) => void) {
    for (const key in obj) {
        cb(obj[key], key)
    }
}

