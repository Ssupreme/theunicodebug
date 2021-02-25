import styled from 'styled-components';
import {device} from '../../../theme'
import {NavbarWrap} from '../../shared/navbar/navbar.stc'
import {NavItemWrap} from '../../shared/navbar/navitem/navitem.stc'
import {NavLinkWrap} from '../../shared/navbar/navlink/navlink.stc'
import {SubmenuWrap} from '../../shared/navbar/submenu/submenu.stc'
import {ExpandButtonWrap} from '../../shared/navbar/expand-button/expand-button.stc'

export const MobileMenuWrap = styled.nav `
    ${NavbarWrap}{
        flex-direction: column;
    } 
    ${NavItemWrap}{
        margin-left: 0;
        margin-right: 0;
        position: relative;
        border-bottom: 1px solid rgba(255,255,255,0.15);
        ${ExpandButtonWrap}{
            position: relative;
            right: auto;
            top: auto;
            display: block;
            color: #ffffff;
            padding: 15px 0;
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            .icon{
                right: 0;
            }
            span {
                font-size: 16px;
                padding: 0;
                font-weight: 400;
                @media ${device.medium}{
                    font-size: 16px;
                }
            }
        }
        &:hover{
            & > ${NavLinkWrap}{
                color: #fff;
            }
        }
    }
    .submenu-open{
        & > ${SubmenuWrap}{
            max-height: 1000px;
            visibility: visible;
            opacity: 1;
            padding-top: 12px;
            padding-bottom: 10px;
            pointer-events: visible;
        }
    }
    ${NavLinkWrap}{
        display: block;
        color: #ffffff;
        padding: 15px 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        transition: ${props => props.theme.baseTransition};
        span{
            padding: 0;
        }
    }
    ${SubmenuWrap}{
        position: relative;
        min-width: 100%;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 14px;
        padding-right: 0;
        border-top: 1px solid rgba(255,255,255,0.15);
        background-color: transparent;
        top: auto;
        left: 0;
        box-shadow: 0 0px 0px rgba(0,0,0,0.05);
        border-bottom: none;
        transform: translateY(0);
        max-height: 0;
        overflow-y: hidden;
        transition-property: all;
        transition-duration: .5s;
        transition-timing-function: ease-in-out;
        transform-origin: top;
        ${NavItemWrap}{
            &:last-child{
                border-bottom: 0;
            }
        }
        ${NavLinkWrap}{
            display: block;
            font-size: 15px;
            color: rgba(255,255,255,0.7);
            font-weight: 500;
            line-height: 1.5;
            padding: 10px 0;
        }
    }
`;