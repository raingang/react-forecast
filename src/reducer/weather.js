import { LOAD_WEATHER, GET_LOCATION } from '../constants'

export default (defaultState = null, action) => {
    const { type } = action
    switch (type) {
        case LOAD_WEATHER:
            console.log('REDUCER')
            return action.response
        case GET_LOCATION:
            return action.response
    }

    return defaultState
}