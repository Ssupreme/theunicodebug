import styled, {css} from 'styled-components';
import {SubmenuWrap} from '../../shared/navbar/submenu/submenu.stc'
import {NavLinkWrap} from '../../shared/navbar/navlink/navlink.stc'
import {device} from '../../../theme'

export const VerticalMenuWrap = styled.nav `
    ${props => props.isHovered && css `
        a{
            opacity: .4; 
            &:hover{
                opacity: 1;
            }
        }
    `}
    .submenu-open{
        & > ${SubmenuWrap}{
            max-height: 1000px;
            visibility: visible;
            opacity: 1;
            pointer-events: visible;
        }
    }
    ${SubmenuWrap}{
        max-height: 0;
        overflow-y: hidden;
        ${NavLinkWrap}{
            font-size: 20px;
            @media ${device.large}{
                font-size: 18px;
            }
            @media ${device.xxsmall}{
                font-size: 4vw;
            }
        }
    }
`;