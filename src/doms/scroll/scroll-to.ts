/**
 * Scroll To
 * @param pos
 * @constructor
 */
export const ScrollTo = (pos = 0) => {
	setTimeout(() => window.scrollTo({left: 0, top: pos, behavior: 'smooth'}))
}

/**
 * Scroll To defined ID
 * @param id
 * @param top
 * @constructor
 */
export const ScrollToID = (id: string, top: number = 0) => {
	return e => {
		e.preventDefault()
		const el = document.getElementById(id)
		if (!el) return

		const rect = el.getBoundingClientRect()
		ScrollTo(rect.top + ScrollTop() - top)
	}
}

/**
 * Location scroll top
 * @constructor
 */
export const ScrollTop = () => (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
