/**
 * Detect is browser or not
 */
declare var process

export const IsBrowser = typeof window !== 'undefined'
	&& typeof document !== 'undefined'
	&& typeof process === 'object'
