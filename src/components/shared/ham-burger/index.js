import React from 'react'
import {HamburgerWrap, HamburgerInner} from './ham-burger.stc';

const HamBurger = (props) => {
    return (
        <HamburgerWrap className="hamBurger">
            <HamburgerInner {...props}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerInner>
        </HamburgerWrap>
    )
}

export default HamBurger
