import React  from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => <img src={props.logo} alt={props.alt}></img>;

Logo.propTypes = {
    logo: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default Logo;
