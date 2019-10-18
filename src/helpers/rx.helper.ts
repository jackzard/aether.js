import { OperatorFunction } from 'rxjs'
import { distinctUntilChanged, filter, map } from 'rxjs/operators'
import { NG } from './object.helper'

export const RXPipeUnique: OperatorFunction<any, any> =
	distinctUntilChanged((a, b) => {
		return JSON.stringify(a) === JSON.stringify(b)
	})

export function RXPipeFilterPath<T>(path: string) {
	return filter<T>(i => NG(i, path))
}

export function RXPipeMapPath<T>(path: string) {
	return map<any, T>(i => NG(i, path))
}
