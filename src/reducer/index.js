import { combineReducers } from 'redux'
import measurement from './measurement'
import weather from './weather'
import status from './status'


export default combineReducers({
    measurement,
    weather,
    status: status
})