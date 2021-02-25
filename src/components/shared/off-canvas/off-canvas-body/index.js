import React from 'react'
import PropTypes from 'prop-types'
import {OffCanvasBodyWrap} from './off-canvas-body.style'

export const OffCanvasBody = ({children}) => {
    return (
        <OffCanvasBodyWrap>{children}</OffCanvasBodyWrap>
    )
}

OffCanvasBody.propTypes = {
    children: PropTypes.node.isRequired
}

