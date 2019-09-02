/**
 * Safe runner / Try catch
 * @param cb
 * @constructor
 */
export const SafeRunner = (cb) => {
	try {
		cb()
	} catch (e) {
	}
}
