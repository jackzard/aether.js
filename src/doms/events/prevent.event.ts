/**
 * Prevent Enter keyboard
 * @param e
 * @constructor
 */
export const PreventEnter = (e) => {
	const key = e.charCode || e.keyCode
	if (key === 13) e.preventDefault()
}

/**
 * Prevent All
 * @param e
 * @constructor
 */
export const PreventAll = e => {
	e.preventDefault()
	e.stopPropagation()
}
