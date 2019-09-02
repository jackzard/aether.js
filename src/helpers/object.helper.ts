/**
 * Nested Get for object
 * NG(obj, 'path1.path2')
 * @param obj
 * @param key
 * @param initial
 * @constructor
 */
export const NG = (obj = {}, key = '', initial = undefined): any => {
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
export const NS = (obj: any, path: string, value: any) => {
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
