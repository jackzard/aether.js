/**
 * Cache by specifix index of arguments
 * fn (arg1,arg2,arg3,arg4,arg5)
 * ex : [0,1,2]
 * @param args_index
 * @constructor
 */
export function CacheArgs(args_index: number[] = []) {
	return function (target, key, descriptor) {
		descriptor.value = cacheArguments(key, descriptor.value, args_index)
	}
}

const cacheArguments = (key, oriFN, args_index = []) => {

	return function (...args) {
		const cache_parent_key = `__cache_${ key }`
		if (!this[cache_parent_key]) this[cache_parent_key] = {}

		const args_items = args_index.length
			? args.filter((_, i) => args_index.includes(i))
			: args

		const cache_args_key = JSON.stringify(args_items)
		const cached = this[cache_parent_key][cache_args_key]
		if (cached) return cached

		this[cache_parent_key][cache_args_key] = oriFN.apply(this, args)
		return this[cache_parent_key][cache_args_key]
	}
}
