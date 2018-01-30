import {GET_LOCATION} from '../constants'

export default store => next => action => {
    if (action.type == GET_LOCATION){ 
    	if(navigator){
	    	function success(pos){
	    		console.log('CURRENT POSITION ', {locaton: {latitude: pos.coords.latitude, longitude: pos.coords.longitude}})
	    		next({... action, location: {latitude: pos.coords.latitude, longitude: pos.coords.longitude}})
	    	}
	    	navigator.geolocation.getCurrentPosition(success)
	    }
	    else{
	    	next(action)
	    }
    }
    else{
    	next(action)
    }

}