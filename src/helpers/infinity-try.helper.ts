/**
 * Infinite loop
 * @param cb
 * @param step_interval
 * @param kill
 * @constructor
 */
export const InfinityTry = (cb, step_interval = 100, kill = 5000) => {
	const interval = setInterval(() => {
		const callback = cb()
		if (callback === true) clearInterval(interval)
	}, step_interval)

	// force destroy interval in 5s
	setTimeout(() => clearInterval(interval), kill)
}
