import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'

class Notification extends Component {
    static propTypes = {
        notification: PropTypes.objectOf(PropTypes.bool)
    }
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