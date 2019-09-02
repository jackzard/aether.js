/**
 * Unique Single items without object inside bucket
 * @param d
 */
export const Unique = d => d.filter((val, index, self) => self.indexOf(val) === index)


/**
 *    Unique By Field
 *    UniqueBy('id')
 * @param field
 */
export const UniqueBy = (field: string) => d => {
	const unique: any = {}
	const unique_index = []
	d.map((item, i) => {
		const key = item[field]
		if (!unique[key]) {
			unique[key] = true
			unique_index.push(i)
		}
	})
	return d.filter((_, i) => unique_index.indexOf(i) > -1)
}
