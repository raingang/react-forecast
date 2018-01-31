import { LOAD_WEATHER, GET_LOCATION, SUCCESS} from '../constants'

export default (defaultState = null, action) => {
    const { type } = action
    switch (type) {
        case LOAD_WEATHER + SUCCESS:
            return action.response
    }

    return defaultState
}