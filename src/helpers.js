export function celsToFahr(measurement, temp_c){
	return measurement == 'fahrenheit' ? (temp_c * 1.8 + 32) : temp_c
}