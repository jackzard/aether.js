export function IsDefined(v): boolean {
    return typeof v !== 'undefined'
}

export function IsDefinedAndNotNull(v): boolean {
    return typeof v !== 'undefined' && v !== null
}
