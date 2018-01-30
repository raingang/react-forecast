import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CurrentWeather extends Component {
    
    render() {
    	const {name, sys, weather} = this.props.weather
        return (
            <div>
        	<h2>{name}, {sys.country}</h2>
        	<span>{weather[0].main}</span>
        	</div>
        )
    }
}

export default CurrentWeather