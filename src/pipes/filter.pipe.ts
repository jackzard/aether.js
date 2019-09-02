/**
 * Pipe filter like array of es6
 * @param fn
 */
export const Filter = (fn) => d => d.filter(fn)

/**
 * Pipe filter for object in bucket
 * FilterBy('name', 'John');
 * @param field
 * @param value
 */
export const FilterBy = (field: string, value: any) => d => d.filter(i => i[field] === value)

/**
 * Pipe filters by (for multiple)
 * @param filter
 * FiltersBy([{field: 'name', value: 'first'},{field:'id',value:1}])
 */
export const FiltersBy = (filter: { field: string, value: any }[]) => d => d.filter(item => {
	let valid = false
	for (let i = 0; i < filter.length; i++) {
		const f = filter[i]
		valid = item[f.field] === f.value
		if (valid === false) break
	}
	return valid
})
