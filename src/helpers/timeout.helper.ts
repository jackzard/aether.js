/**
 * Shortcut setTimeout in async await
 * @param time
 * @constructor
 */
export const TimeoutWait = (time: number = 0) => {
	return new Promise(resolve => setTimeout(resolve, time))
}

/**
 * Debounce Helper
 * @param fn
 * @param time
 * @constructor
 */
export const Debounce = function (fn, time) {
	let timeout

	return function (...arg) {
		const functionCall = function () {
			fn.bind(this)(...arg)
		}

		clearTimeout(timeout)
		timeout = setTimeout(functionCall, time)
	}
}
