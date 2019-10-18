import { SafeRunner } from './safe-runner.helper'

let CompareAsString: any = {}

export const CompareAsStringRemove = (key: string) => CompareAsString[key] = ''
export const CompareAsStringFlushAll = () => CompareAsString = {}

export const CompareAsStringAndCache = (key: string, data: any) => {
	let valid = false
	SafeRunner(() => {
		const data_string = JSON.stringify(data)
		if (CompareAsString[key] !== data_string) {
			CompareAsString[key] = data_string
			valid = true
		}
	})

	// Data equal
	return valid
}
