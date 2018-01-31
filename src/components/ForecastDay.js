import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { celsToFahr, dateToWeekday } from '../helpers'

class ForecastDay extends Component {
    static propTypes = {
        forecast: PropTypes.object.isRequired
    }

    render() {
        const { measurement } = this.props
        const { date, day } = this.props.forecast
        const weekday = dateToWeekday(date)
        const condition = day.condition.text
        const mintemp = celsToFahr(measurement, day.mintemp_c)
        const maxtemp = celsToFahr(measurement, day.maxtemp_c)
        return (
            <div>
            <span>{weekday}</span> 
            <span>{condition}</span>
            <span>{mintemp} - {maxtemp}</span>
            </div>
        )
    }
}

export default ForecastDay