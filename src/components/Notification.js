import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'

class Notification extends Component {
    static propTypes = {
    }
    render() {
        console.log('NOTE UPdate')
        const {status} = this.props
        const loading = status.get('loading')
        const loaded = status.get('loaded')
        const error = status.get('error')
        const message = status.get('message')
        const notNames = classNames({
            'notification': !loaded,
            'notification-success': loaded,
            'notification-error': error
        })
        return (
            <div className = {notNames} >
            {message}
            </div>
        )
    }
}

export default connect((state) => ({status: state.status }))(Notification)