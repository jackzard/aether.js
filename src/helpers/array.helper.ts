export function IsArrayAndHasChild(c: any[]): boolean {
    return (Array.isArray(c) && c.length) > 0
}

export function ArrayUnique<T = any>(c: any[]): T[] {
    return c.filter((val, index, self) => {
        return self.indexOf(val) === index
    })
}

export function ArrayConvert<T = any>(c: any): T[] {
    return Array.isArray(c) ? c : [c]
}
