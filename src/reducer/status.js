import { LOAD_WEATHER } from '../constants'

export default (loaded = false, action) => {
    const { type } = action

    switch (type) {
        case LOAD_WEATHER:
            return true
    }

    return loaded
}