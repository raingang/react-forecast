import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import StatusBar from './StatusBar'
import { curWeather } from '../fixtures'
import { connect } from 'react-redux'
import { loadWeather } from '../AC/'
import { API_KEY } from '../constants'
import './css/App.css'

class App extends Component {
    componentDidMount() {
        this.loadWeather()
    }
    componentDidUpdate() {
        const { status } = this.props
        if ((!status.get('loading') && (!status.get('loaded'))) && (!status.get('error'))) {
            this.loadWeather()
        } else {
            if (!status.get('local') && status.get('location')) {
                this.loadWeather()
            }
        }
    }
    render() {
        console.log('----- App update')
        const { weather, measurement } = this.props
        return (
            <div>
            <StatusBar />
            <Buttons />
            <CurrentWeather measurement = {measurement} />
            <Forecast />
            </div>
        )
    }

    loadWeather = () => {
        const location = this.props.status.get('location')
        const query = location ? (location.latitude + ',' + location.longitude) : 'Tokyo'
        const callAPI = 'http://api.apixu.com/v1/forecast.json?key=' + API_KEY + '&q=' + query + '&days=6'
        this.props.loadWeather(callAPI)
    }
}

export default connect((state) => ({ measurement: state.measurement, status: state.status }), { loadWeather })(App)