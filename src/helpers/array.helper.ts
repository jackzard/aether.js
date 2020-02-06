export const IsArrayAndHasChild = (c: any[]) => Array.isArray(c) && c.length

export const ArrayUnique = (c: any[]) => c.filter((val, index, self) => {
	return self.indexOf(val) === index
})
