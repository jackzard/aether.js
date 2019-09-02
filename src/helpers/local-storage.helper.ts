import { DayjsHelper } from './dayjs.helper'

const format_date = 'YYYY/MM/DD:HH:mm'
const LSKey = (key) => {
	return `__${ key }__`
}

export const SetLocalStorage = (key, value) => {
	localStorage.setItem(LSKey(key), JSON.stringify({
		data: value,
		time: DayjsHelper().format(format_date)
	}))
}

export const GetLocalStorage = (key, full = false) => {
	const data = localStorage.getItem(LSKey(key))
	if (!data) return null

	const parsed = JSON.parse(data)
	return !full
		? parsed.data
		: {
			data: parsed.data,
			time: DayjsHelper(parsed.time, format_date)
		}
}

export const RemoveLocalStorage = (key) => {
	localStorage.removeItem(LSKey(key))
}
