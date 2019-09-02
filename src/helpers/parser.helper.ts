/**
 * Simple template engine
 * @param str
 * @param mix
 * @constructor
 */
export const SimpleParser = (str, mix) => {
	return str.replace(/{{(.*?)}}/g, (x, key, y) => {
		x = 0
		y = mix
		key = key.trim().split('.')
		while (y && x < key.length) {
			y = y[key[x++]]
		}
		return y != null ? y : ''
	})
}
