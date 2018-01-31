import { LOAD_WEATHER, START, SUCCESS, FAIL, GET_LOCATION } from '../constants'
import { Map } from 'immutable'

const defaultStatus = Map({
    loaded: false,
    loading: false,
    error: false,
    location: null,
    local: false,
    message: 'Click on the  button to share your current location.'
})

export default (status = defaultStatus, action) => {
    const { type } = action
    switch (type) {
        case LOAD_WEATHER + START:
            return status.set('loading', true).set('message', 'Loading...')
    }
    switch (type) {
        case LOAD_WEATHER + SUCCESS:
            status = status.set('loaded', true).set('loading', false)
            if (status.get('location')) {
                return status.set('local', true).set('message', 'Location successfully installed')
            } else {
                return status.set('message', 'Click on the  button to share your current location.')
            }
    }
    switch (type) {
        case LOAD_WEATHER + FAIL:
            return status.set('error', true).set('loading', false).set('message', 'Failed to load data.')
    }
    switch (type) {
        case GET_LOCATION + SUCCESS:
            const { location } = action
            return status.set('location', location).set('message', 'Location successfully installed')
    }

    return status
}