import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import api from '../middlewares/api'
import location from '../middlewares/location'

const enhancer = applyMiddleware(location, api)
const store = createStore(reducer, {}, enhancer)

// for dev
window.store = store 

export default store