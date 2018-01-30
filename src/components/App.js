import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import { curWeather } from '../fixtures'

class App extends Component {
    render() {
        console.log(this.props)
        const { weather } = this.props
        return (
            <div>
        	<Buttons />
        	<CurrentWeather weather = { curWeather }/>
        	<Forecast />
        	</div>
        )
    }
}

export default App