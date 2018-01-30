import { GET_LOCATION } from '../constants'


const defaultNotification = { error: false, local: false }

export default (notification = defaultNotification, action) => {
    const { type } = action

    switch (type) {
        case GET_LOCATION:
            return { error: false, local: true }
    }

    return notification
}