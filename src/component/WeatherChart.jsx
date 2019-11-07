import React from 'react';
import PropTypes from 'prop-types';

const WeatherChart = (props) => {

    const tableData = Object.keys(props.data).map((e, k) =>
        <tr key={k}>
            <td>
                {e}
            </td>
            <td>
                {props.data[e]}
            </td>
        </tr>
    );

    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    )
};

WeatherChart.propTypes = {
    data: PropTypes.shape({
        wind: PropTypes.number.isRequired,
        clouds: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        locale: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
    })
};

export default WeatherChart;