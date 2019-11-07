import React from 'react';
import PropTypes from 'prop-types';

import {defaultContext} from '../mocks/WeatherData';

const SunsetView = (props) => {
    return (
        <div
            className="col-6 title-container my-auto text-center text-shadow">
            <div className="mx-0">
                <h1>{props.time}</h1>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                {
                    props.rating ?
                        <strong>
                            Rating: {props.rating}
                        </strong>
                        :
                        null
                }
            </div>
        </div>
    )
}

SunsetView.propTypes = {
    time: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number
};

SunsetView.defaultProps = {
    ...defaultContext,
};

export default SunsetView;