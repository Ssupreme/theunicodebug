import React from 'react'
import PropTypes from 'prop-types'
import {NavItem} from './navitem'
import {NavLink} from './navlink'
import {Submenu} from './submenu'
import {ExpandButton} from './expand-button'
import {NavbarWrap} from './navbar.stc'

const NavBar = ({children, ...props}) => {
    return (
        <NavbarWrap {...props}>
            {children}
        </NavbarWrap>
    )
}

NavBar.propTypes = {
    children: PropTypes.node.isRequired
};


export {NavItem, NavLink, Submenu, ExpandButton}

export default NavBar
  