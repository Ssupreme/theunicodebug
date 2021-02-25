import React from 'react'
import {ExpandButtonWrap} from './expand-button.stc'

export const ExpandButton = ({onClick, text, ...props}) => {
    return (
        <ExpandButtonWrap className="menu-expand" onClick={onClick} {...props}>
            <span>{text}</span>
            <i className="icon ti-angle-down"></i>
        </ExpandButtonWrap>
    )
}

