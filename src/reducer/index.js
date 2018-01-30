import { combineReducers } from 'redux'
import measurement from './measurement'
import weather from './weather'
import notification from './notification'

export default combineReducers({
    measurement,
    weather,
    notification
})