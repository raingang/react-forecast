import { LOAD_WEATHER, SUCCESS, FAIL, GET_LOCATION } from '../constants'
import { Map } from 'immutable'

const defaultStatus = Map({
    loaded: false,
    loading: false,
    error: false,
    location: null,
    message: 'Click on the  button to share your current location.'
})

export default (status = defaultStatus, action) => {
    const { type } = action

    switch (type) {
        case LOAD_WEATHER + SUCCESS:
            return status.set('loaded', true)
    }
    switch (type) {
    	case LOAD_WEATHER + FAIL:
    		return status.set('error', true).set('message', 'Failed to load data.')
    }
    switch(type) {
    	case GET_LOCATION + SUCCESS:
    		const {location} = action
    		return status.set('location', location).set('message', 'Location successfully installed')
    }

    return status
}