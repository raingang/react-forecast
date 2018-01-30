import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeMeasurement, getLocation } from '../AC/'
import './css/Buttons.css'

class Buttons extends Component {
    constructor(props) {
        super(props)
        this.handleMeasClick = this.handleMeasClick.bind(this)
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
        const { getLocation } = this.props
        getLocation()
    }
}

export default connect((state) => ({ measurement: state.measurement }), { changeMeasurement, getLocation })(Buttons)