import React from 'react'
import PropTypes from 'prop-types';
import {NavLinkWrap} from './navlink.stc'

export const NavLink = ({path, children, ...props}) => {
    return (
        <NavLinkWrap to={path} className="big-cursor" activeClassName="active" {...props}>
            {children}
        </NavLinkWrap>
    )
}

NavLink.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string
};

NavLink.defaultProps = {
    path: '/'
}

