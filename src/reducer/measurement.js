import { CHANGE_MEASUREMENT } from '../constants'

export default (measurement = 'fahrenheit', action) => {
    const { type } = action

    switch (type) {
        case CHANGE_MEASUREMENT:
            return measurement == 'fahrenheit' ? 'celsius' : 'fahrenheit'
    }

    return measurement
}