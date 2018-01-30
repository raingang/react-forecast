import {CHANGE_MEASUREMENT, LOAD_WEATHER, GET_LOCATION} from '../constants'

export function changeMeasurement(){
	console.log('CHANGE')
	return {
		type: CHANGE_MEASUREMENT
	}
}

export function loadWeather(callAPI){
	console.log('loadWeather')
	return {
		type: LOAD_WEATHER,
		callAPI: callAPI
	}
}

export function getLocation(){
	console.log('location action')
	return {
		type: GET_LOCATION,
	}
}