/*
	Deep Clone objects / array
 */
export function DeepAssign<T>(obj): T | any {
	return JSON.parse(JSON.stringify(obj))
}

export function MergeDeep<T>(target, source): T | any {
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
