/**
 * Infinite loop
 * @param cb
 * @param step_interval
 * @param kill
 * @constructor
 */
export function InfinityTry(cb: Function, step_interval = 100, kill = 5000) {
    const interval = setInterval(() => {
        const callback = cb()
        if (callback === true) clearInterval(interval)
    }, step_interval)

    // force destroy interval in 5s
    setTimeout(() => clearInterval(interval), kill)
}

export function InfinityTryCallback(fn: Function): Promise<boolean> {
    return new Promise(done => {
            InfinityTry(() => {
                if (!fn()) return false
                done(true)
                return true
            })
        }
    )
}
