import styled, {css} from 'styled-components'
import {NavbarWrap} from '../../shared/navbar/navbar.stc'
import {NavItemWrap} from '../../shared/navbar/navitem/navitem.stc'
import {NavLinkWrap} from '../../shared/navbar/navlink/navlink.stc'
import {SubmenuWrap} from '../../shared/navbar/submenu/submenu.stc'

export const HorizontalNav = styled.nav `
    ${NavbarWrap}{
        list-style: none;
    }
    ${NavItemWrap}{
        display: inline-block;
        position: relative;
        margin-left: 10px;
        margin-right: 10px;
        &:after{
            position: absolute;
            content: "";
            left: -5px;
            bottom: -37px;
            width: 120%;
            height: 50px;
        }
        &:first-child{
            margin-left: 0;
        }
        &:last-child{
            margin-right: 0;
        }
        .icon{
            font-size: 13px;
            color: #fff;
            padding-left: 6px;
        }
    }
    ${NavLinkWrap}{
        font-size: 16px;
        font-weight: 400;
        padding-bottom: 7px;
        position: relative;
        display: inline-block;
        &:after{
            position: absolute;
            content: "";
            right: 0;
            left: auto;
            bottom: 0;
            width: 0;
            height: 2px;
            background: ${props => props.theme.colors.primary};
            transition: ${props => props.theme.baseTransition};
        }
        &:hover{
            &:after{
                width: 100%;
                left: 0;
            }
        }
    }
    ${SubmenuWrap}{
        position: absolute;
        overflow: visible;
        z-index: 999;
        top: 60px;
        border-radius: 4px;
        pointer-events: none;
        background: #fff;
        min-width: 220px;
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 17px;
        padding-bottom: 15px;
        visibility: hidden;
        opacity: 0;
        transition: ${props => props.theme.baseTransition};
        ${NavItemWrap}{
            display: block;
            margin-left: 0;
            margin-right: 0;
        }
        ${NavLinkWrap}{
            color: ${props => props.theme.colors.headingColor};
        }
    }
    ${NavItemWrap}{
        &:hover{
            ${SubmenuWrap}{
                pointer-events: visible;
                visibility: visible;
                opacity: 1;
                top: 40px;
            }
        }
    }
    ${props => props.isStick && css `
        ${NavItemWrap}{
            .icon{
                color: ${props => props.theme.colors.headingColor};
            }
        }
        ${NavLinkWrap}{
            color: ${props => props.theme.colors.headingColor};
        }
    `}
`; 