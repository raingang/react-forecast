import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fahrToCels } from '../helpers'
import { connect } from 'react-redux'
import './css/CurrentWeather.css'

class CurrentWeather extends Component {
    static propTypes = {
        measurement: PropTypes.string,
        weather: PropTypes.object
    }
    render() {
        const { measurement, weather } = this.props
        return (
            <div className = 'currentWeather'>
            {weather ? this.getBody() : 'Loading ...'}
            </div>
        )
    }

    getBody = () => {
        if (this.props.weather) {
            const { measurement, weather } = this.props
            const { name, country } = weather.location
            const { temp_c, condition } = weather.current
            const temp = measurement == 'fahrenheit' ? (temp_c * 1.8 + 32) : temp_c
            return (
                <div>
                    <span>{name}, {country}</span>
                    <span>{temp}</span>
                    <span>{condition.text}</span>
                </div>
            )
        }
    }
}

export default connect((state) => ({ weather: state.weather }))(CurrentWeather)