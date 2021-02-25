import styled, {css} from 'styled-components';
import {SubmenuWrap} from '../../shared/navbar/submenu/submenu.stc'

export const MainMenuWrap = styled.nav `
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
`;