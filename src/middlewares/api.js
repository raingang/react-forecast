export default store => next => action => {
    let { callAPI } = action

    if (!callAPI && action.type !== 'GET_LOCATION') return next(action)
    if (action.type == 'GET_LOCATION') {
        const { latitude, longitude } = action.location
        callAPI = 'http://api.apixu.com/v1/forecast.json?key=1465836159ae4ac9846104809183001&q=' + latitude + ',' + longitude + '&days=4'
    }
    fetch(callAPI)
        .then((res) => res.json())
        .then((response) => {
        	console.log(callAPI)
            return next({ ...action, response })
        })
}