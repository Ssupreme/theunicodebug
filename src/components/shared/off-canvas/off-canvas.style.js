import styled, {css} from 'styled-components';
import CloseIcon from '../../../assets/img/icons/light-close.png'
import {device} from '../../../theme'

export const OffCanvaseWrap = styled.div `
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #333333;
    transition: ${props => props.theme.baseTransition};
    z-index: 9999;
    background: rgba(0,0,0,0.7);
    cursor: url(${CloseIcon}) 16 16,pointer;
    overflow-y: hidden;
    visibility: hidden;
    opacity: 0;
    ${props => props.isOpen && css `
        visibility: visible;
        opacity: 1;
    `}
    ${props => props.scrollable && css `
        overflow: auto;
    `}
`;

export const OffCanvasInner = styled.div `
    transform: translateX(120%);
    width: 350px;
    height: 100%;
    float: right;
    cursor: default;
    background: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.baseTransition};
    overflow-y: hidden;
    @media ${device.xsmall}{
        width: 300px;
    }
    ${props => props.scrollable && css `
        overflow-y: auto;
    `}
    ${props => props.isOpen && css `
        transform: translateX(0%);
    `}
`;