import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button/Button';
import { formatToTime } from '../../helpers/validators';
import './styles.scss';

class AppointmentDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0
        }
    }

    render () {
        const updateButtonStyle = index => {
            this.setState({ currentIndex: index })
        }

        return this.props.data.map((consultantAppoint, index) => {
            const style = index === this.state.currentIndex ? "active" : "button";
            const formattedValue = formatToTime(consultantAppoint);

            return (
                <Button
                    key={consultantAppoint}
                    text={formattedValue}
                    styles={style}
                    onClick={() => {
                        this.props.onClick && this.props.onClick(consultantAppoint);
                        updateButtonStyle(index)
                    }}
                >
                </Button>
            )
        })
    }
}

AppointmentDetails.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string),
};

export default AppointmentDetails;