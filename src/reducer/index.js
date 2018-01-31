import { combineReducers } from 'redux'
import measurement from './measurement'
import weather from './weather'
import notification from './notification'
import status from './status'


export default combineReducers({
    measurement,
    weather,
    notification,
    loaded: status
})