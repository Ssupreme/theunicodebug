import React from 'react'
import NavBar, {NavItem, NavLink, Submenu, ExpandButton} from '../../shared/navbar'
import {MobileMenuWrap} from './mobilemenu.style'
import {getClosest, getSiblings} from '../../../utils/utilFunctions'

const MobileMenu = ({menuData}) => {
    const removeClassFromChildren = (parent) => {
        for (let i = 0; i < parent.children.length; i++) {
            if(parent.children[i].tagName === 'UL'){
                let child = parent.children[i].children;
                for(let j = 0; j < child.length; j++){
                    child[j].classList.remove('submenu-open')
                }
            }
        }
    } 
    const onClickHandler = (e, selector) => {
        const target = e.target;
        const parentEl = target.parentElement;
        if(parentEl.classList.contains('menu-expand') || target.classList.contains('menu-expand')){
            let element = target.classList.contains('icon') ? parentEl : target;
            const parent = getClosest(element, selector);
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach(sibling => {
                sibling.classList.remove('submenu-open');
                removeClassFromChildren(sibling);
            });
            removeClassFromChildren(parent)
            parent.classList.toggle('submenu-open');
        }  
    }

    const menuarr = menuData;

    return (
        <MobileMenuWrap>
            <NavBar>
                {menuarr.map((menu, i) => {
                    const hasSubmenu = menu.node.isSubmenu ? true : null;
                    const submenu = menu.node.submenu;
                    const menuIndex = i;
                    return (
                        <NavItem 
                            key={`mainmenu-${menu.node.id}`} 
                            hasSubmenu={hasSubmenu} 
                            className="menu-item" 
                            id={`menu-item-${menuIndex}`}
                        >     
                            {!hasSubmenu && (
                                <NavLink 
                                    path={menu.node.path}
                                >
                                    {menu.node.title}
                                </NavLink>
                            )}        
                            {hasSubmenu && (
                                <ExpandButton 
                                    text={menu.node.title}
                                    onClick={(e) => onClickHandler(e, `#menu-item-${menuIndex}`)}/>
                            )}
                            {submenu && (
                                <Submenu>
                                    {submenu.map((subitem, j) => {
                                        const submenuIndex = j;
                                        return(
                                            <NavItem 
                                            key={`submenu-${menu.node.id}-${submenuIndex}`}
                                            className="menu-item" 
                                            id={`submenu-item-${menuIndex}${submenuIndex}`}>
                                                <NavLink 
                                                    path={subitem.path}
                                                >
                                                    {subitem.title}
                                                </NavLink>
                                            </NavItem>
                                        )
                                    })}
                                </Submenu>
                            )}
                        </NavItem>
                    )
                })}
            </NavBar>
        </MobileMenuWrap>
    )
}

export default MobileMenu;