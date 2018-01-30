import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import Notification from './Notification'
import { curWeather } from '../fixtures'
import { connect } from 'react-redux'
import { loadWeather } from '../AC/'
import './css/App.css'

class App extends Component {
    componentDidMount() {
        const callAPI = 'http://api.apixu.com/v1/forecast.json?key=1465836159ae4ac9846104809183001&q=Kharkiv&days=4'
        console.log('will_mount', this.props)
        this.props.loadWeather(callAPI)
        console.log('weather is loaded')
    }

    render() {
        console.log('----- App update')
        const { weather, measurement } = this.props
        return (
            <div>
            <Notification />
            <Buttons />
            <CurrentWeather measurement = {measurement} />
            <Forecast />
            </div>
        )
    }
}

export default connect((state) => ({ measurement: state.measurement }), { loadWeather })(App)