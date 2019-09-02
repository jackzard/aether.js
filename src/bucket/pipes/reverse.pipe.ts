/**
 * Pipe reverse list
 * @param d
 */
import { DeepAssign } from '../../helpers/clone.helper'

export const Reverse = d => {
	const ori = DeepAssign(d)
	return ori.reverse()
}
