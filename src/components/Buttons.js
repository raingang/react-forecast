import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeMeasurement, getLocation } from '../AC/'
import './css/Buttons.css'

class Buttons extends Component {
    static propTypes = {
        measurement: PropTypes.string,
    }
    render() {
        const { measurement } = this.props
        return (
            <nav className = 'buttons'>
            <button className ="locateBtn" onClick = {this.handleLocationClick}>l          
            </button>
            <button className ="unitBtn" data-units="f" onClick = {this.handleMeasClick}>f</button>
            </nav>
        )
    }
    handleMeasClick = (ev) => {
        ev.preventDefault()
        const { changeMeasurement } = this.props
        changeMeasurement()
    }
    handleLocationClick = (ev) => {
        ev.preventDefault()
        const { getLocation, status } = this.props
        if (!status.get('location')) {
            getLocation()
        }
    }
}

export default connect((state) => ({ measurement: state.measurement, status: state.status }), { changeMeasurement, getLocation })(Buttons)