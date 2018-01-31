export function celsToFahr(measurement, temp_c){
	return measurement == 'fahrenheit' ? (temp_c * 1.8 + 32) : temp_c
}

export function dateToWeekday(date){
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	return  weekday[(new Date(date)).getDay()]
}