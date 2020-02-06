export function IsDefined(v) {
	return typeof v !== 'undefined'
}

export function IsDefinedAndNotNull(v) {
	return typeof v !== 'undefined' && v !== null
}
