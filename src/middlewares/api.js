import { API_KEY, SUCCESS, FAIL, START, LOAD_WEATHER } from '../constants'

export default store => next => action => {
    let { callAPI, type, ...rest } = action

    if (!callAPI) return next(action)
    next({ ...rest, type: LOAD_WEATHER + START })

    fetch(callAPI)
        .then((res) => res.json())
        .then((response) => {

            return next({ ...rest, type: LOAD_WEATHER + SUCCESS, response })
        })
        .catch(error => next({ ...rest, type: LOAD_WEATHER + FAIL, error }))
}