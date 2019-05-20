import React  from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => <h2>{props.subHeading}</h2>;

Logo.propTypes = {
    subHeading: PropTypes.string.isRequired,
};

export default Logo;
