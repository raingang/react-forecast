import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ForecastDay from './ForecastDay'


class Forecast extends Component {
    render() {
        const { status } = this.props
        const loaded = status.get('loaded')
        if (loaded) {
        	return this.getBody()
        } else {
            return null
        }
    }

    getBody = () => {
        const { forecast } = this.props.weather
        let forecastDayElements = forecast.forecastday.map((day) => {
            return (
                <li key = {day.date}>
        			<ForecastDay measurement = {this.props.measurement} forecast = {day} />
        			</li>
            )
        })
        return (
            <ul>
        	{forecastDayElements}
        	</ul>
        )
    }
}

export default connect((state) => ({ status: state.status, weather: state.weather, measurement: state.measurement }))(Forecast)