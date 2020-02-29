/**
 * Detect is browser or not
 */
export const IsBrowser: boolean = typeof window !== 'undefined'
    && typeof document !== 'undefined'
