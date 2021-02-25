import React from 'react'
import {HorizontalNav} from './horizontal-menu.stc'
import NavBar, {NavItem, NavLink, Submenu} from '../../shared/navbar'
 
const HorizontalMenu = ({menuData, ...restProps}) => { 
    return (
        <HorizontalNav {...restProps}>
            <NavBar>
                {menuData.map(menu => { 
                    const hasSubmenu = menu.node.isSubmenu ? true : null;
                    const submenu = menu.node.submenu;
                    return (
                        <NavItem key={`mainmenu-${menu.node.id}`} hasSubmenu={hasSubmenu}>
                            <NavLink path={menu.node.path || "/"}>{menu.node.title}</NavLink>
                            {hasSubmenu && <i className="icon ti-angle-down"></i>}
                            {submenu && (
                                <Submenu>
                                    {submenu.map((subitem, i) => {
                                        const submenuIndex = i;
                                        return(
                                            <NavItem key={`submenu-${menu.node.id}-${submenuIndex}`}>
                                                <NavLink path={subitem.path}>{subitem.title}</NavLink>
                                            </NavItem>
                                        )
                                    })}
                                </Submenu>
                            )}
                        </NavItem>
                    )
                })}     
            </NavBar> 
        </HorizontalNav>
    )
} 

export default HorizontalMenu;