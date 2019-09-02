export interface IToggleMX {
	_toggle: any[]
	checkToggle: (index, e: MouseEvent | any) => void
}

export function Toggle() {
	return (target) => {
		target.prototype._toggle = [0]
		target.prototype.checkToggle = function (index, e) {
			if (e) if (e.target !== e.currentTarget) return

			const find = this._toggle.findIndex(i => i == index)
			if (find >= 0) {
				this._toggle.splice(find, 1)
			} else {
				this._toggle.push(index)
			}
		}
	}
}
