import React from 'react';
import PropTypes from 'prop-types';

const Notification = (props) => {
    return (
        <div className={`notification ${props.type}`}>
            <label>
                {props.label}
            </label>
            <p>{props.description}</p>
        </div>
    )
};

Notification.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'alert', 'danger']),
    description: PropTypes.string.isRequired,
};

Notification.defaultProps = {
    type: 'default',
}

export default Notification;