import klona from 'klona'
import deepEqual from 'fast-deep-equal'

/*
	Deep Clone objects / array
 */
export function DeepAssign<T = any>(obj: T): T {
    return klona(obj)
}

export function DeepEqual<T>(a: T, b: T): boolean {
    return deepEqual(a, b)
}

export function MergeDeep<T>(target: T, source: T): T | any {
    const isObject = (obj) => obj && typeof obj === 'object'

    if (!isObject(target) || !isObject(source)) {
        return source
    }

    Object.keys(source).forEach(key => {
        const targetValue = target[key]
        const sourceValue = source[key]

        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue)
        } else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = MergeDeep(Object.assign({}, targetValue), sourceValue)
        } else {
            target[key] = sourceValue
        }
    })

    return target
}
