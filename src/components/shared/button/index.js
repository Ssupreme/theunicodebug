import React from 'react'
import PropTypes from 'prop-types';
import ButtonWrap from './button.stc';

const Button = ({children, ...props}) => {
    return(
        <ButtonWrap {...props}>{children}</ButtonWrap>
    )
}
 
Button.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    color: PropTypes.string,
    borderwidth: PropTypes.string,
    hover: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    spacer: PropTypes.object
};

Button.defaultProps = {
    fontSize: '12px'
}


export default Button
