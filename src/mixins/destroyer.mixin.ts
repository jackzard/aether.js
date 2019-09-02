import { Observable } from 'rxjs'

export interface IDestroyerMX {
	_destroyed?: boolean
	_subscriber: Observable<any>[]
}

/**
 * Auto observable destroyer when component destroyed (Angular/React)
 * @constructor
 */
export function Destroyer(destroy_name: string) {

	return function (target) {
		const ori_destroy = target.prototype[destroy_name]

		target.prototype._destroyed = false
		target.prototype._subscriber = []

		target.prototype[destroy_name] = function () {
			this._destroyed = true

			this._subscriber.forEach(watch => {
				if (watch.unsubscribe) watch.unsubscribe()
			})

			ori_destroy.apply(this, arguments)
		}

	}
}

export const DestroyerNG = Destroyer('ngOnDestroy')
export const DestroyerReact = Destroyer('componentWillUnmount')
