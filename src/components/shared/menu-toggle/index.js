import React from 'react'
import {MenuToggleWrap, MenuToggleInner, MenuTextWrap, MenuText} from './menu-toggle.stc';


const MenuToggle = ({children, onClick, ...props}) => {
    return (
        <MenuToggleWrap onClick={onClick} {...props}>
            <MenuToggleInner>
                <MenuTextWrap>
                    <MenuText className="open-text">Menu</MenuText>
                    <MenuText className="close-text">Close</MenuText>
                </MenuTextWrap>
                {children}
            </MenuToggleInner>
        </MenuToggleWrap>
    )
}
 
export default MenuToggle
