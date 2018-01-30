import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './css/Notification.css'
import classNames from 'classnames'

class Notification extends Component {

    render() {
        const { error, local } = this.props.notification
        const notNames = classNames({
            'notification': true,
            'notification-off': local,
            'notification-error': error

        })
        return (
            <div className = {notNames} >
        	{local ? null : 'Click on the  button to share your current location.'}
        	</div>
        )
    }
}

export default connect((state) => ({ notification: state.notification }))(Notification)