import { DeepAssign } from '../helpers/clone.helper'

export class Bucket<I> {
	private source: I[] = []
	private pipes: Function[] = []

	private get data(): I[] {
		let results: I[] = this.source
		for (let i = 0; i < this.pipes.length; i++) {
			results = this.pipes[i](results)
		}
		return results
	}

	constructor(data?: any[]) {
		if (data) this.add(data)
		return this
	}

	clone(): Bucket<I> {
		const aether = new Bucket<I>(this.source)
		aether.pipe(...this.pipes)

		return aether
	}

	append(data: any) {
		this.add(data, 1)
		return this
	}

	prepend(data: any) {
		this.add(data, this.source.length - 1)
		return this
	}

	add(data: any, index: number = 0) {
		const d = DeepAssign(data)
		Array.isArray(data)
			? this.source.splice(index, 0, ...d)
			: this.source.splice(index, 0, d)

		return this
	}

	addUnique(data: any, checker: any | Function, index = 0) {
		let check = -1
		if (typeof checker === 'function') {
			check = this.source.findIndex(checker)
		} else {
			check = this.source.findIndex(i => i === checker)
		}
		if (check > -1) this.add(data, index)
		return this
	}


	// Remove all pipes and keep current data after filtering
	updateSource() {
		this.source = this.data
		this.pipes = []
		return this
	}

	pipe(...pipes: Function | any) {
		this.pipes.push(...pipes)
		return this
	}

	private cleanPipe() {
		this.pipes = []
		return this
	}

	get(): I[] {
		const d = this.data
		this.cleanPipe()
		return d
	}

	getByIndex(index: number): I {
		const d = this.data
		this.cleanPipe()
		return d[index]
	}

	first(): I {
		return this.getByIndex(0)
	}

	last(): I {
		const d = this.data
		return this.getByIndex(d.length - 1)
	}

	total(): number {
		const d = this.data
		this.cleanPipe()
		return Array.isArray(d) ? d.length : null
	}

	removeFirst() {
		this.source.shift()
		return this
	}

	removeLast() {
		this.source.splice(-1, 1)
		return this
	}

	removeByIndex(index: number, total: number = 1) {
		this.source.splice(index, total)
	}

	update(index: number, data: any) {
		this.source[index] = data
		return this
	}

	updateBy(field: string, value: any, data: any) {
		const index = this.source.findIndex(i => i[field] === value)
		if (index > -1) this.source[index] = data
		return this
	}
}









