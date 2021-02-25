import React from 'react'
import PropTypes from 'prop-types'
import {SubmenuWrap} from './submenu.stc'

export const Submenu = ({children, ...props}) => {
    return <SubmenuWrap {...props}>{children}</SubmenuWrap>
}

Submenu.propTypes = {
    children: PropTypes.node.isRequired
}
