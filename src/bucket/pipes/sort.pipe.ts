/**
 * Pipe sort like es6
 * @param fn
 */
import { DeepAssign } from '../../helpers/clone.helper'

export const Sort = (fn) => d => {
	const ori = DeepAssign(d)
	return ori.sort(fn)
}

/**
 * Pipe Sort By field
 * @param field
 * SortBy('report_total')
 */
export const SortBy = (field: string) => d => {
	const ori = DeepAssign(d)
	const desc = field.startsWith('-')
	return ori.sort((a, b) => desc
		? b[field] - a[field]
		: a[field] - b[field]
	)
}
