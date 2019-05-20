import React  from 'react';
import PropTypes from 'prop-types';

const Button = (props) => <button onClick={props.onClick} className={props.styles}>{props.text}</button>;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    styles: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
