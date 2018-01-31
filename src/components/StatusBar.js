import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './css/StatusBar.css'
class StatusBar extends Component {
    static propTypes = {
    }
    state = {
        isOpen: true
    }
    render() {
        const {status} = this.props
        console.log(status)
        const loading = status.get('loading')
        const loaded = status.get('loaded')
        const error = status.get('error')
        const message = status.get('message')
        const local = status.get('local')
        const notNames = classNames({
            'statusbar': this.state.isOpen,
            'statusbar-success': local,
            'statusbar-error': error,
            'statusbar-close': !this.state.isOpen
        })
        return (
            <div className = {notNames} >
            {message}
            <input type = 'button' onClick = {this.handleCloseClick} value = 'x' />
            </div>
        )
    }
    handleCloseClick = (ev) =>{
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default connect((state) => ({status: state.status }))(StatusBar)