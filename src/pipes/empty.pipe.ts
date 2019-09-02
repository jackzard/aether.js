/**
 * Pipe filter of empty
 * @param d
 */
export const IsNotZero = d => d.filter(i => typeof i !== 'undefined' && i !== null)
