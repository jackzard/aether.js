export function RandomRangeNumber(min: number, max: number, round?: boolean): number {
    let random = Math.random() * (max - min) + min
    if (round) random = Math.round(random)
    return random
}
