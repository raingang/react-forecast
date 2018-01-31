import { GET_LOCATION, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const { type, ...rest } = action
    if (type == GET_LOCATION) {
        if (navigator) {
            function success(pos) {
                next({ ...rest, type: type + SUCCESS, location: { latitude: pos.coords.latitude, longitude: pos.coords.longitude } })
            }

            function error(error) {
                next({ ...rest, type: type + FAIL, error })
            }
            navigator.geolocation.getCurrentPosition(success, error)
        } else {
            next(action)
        }
    } else {
        next(action)
    }

}