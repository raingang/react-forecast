import { API_KEY, SUCCESS, ERROR } from '../constants'

export default store => next => action => {
    let { callAPI, type, ...rest } = action

    if (!callAPI) return next(action)

    next({...rest, type: type + 'START'})

    fetch(callAPI)
        .then((res) => res.json())
        .then((response) => {
            console.log(callAPI)
            return next({ ...rest, type: type + SUCCESS, response })
        })
        .catch(error => next({ ...rest, type: type, error }))
}