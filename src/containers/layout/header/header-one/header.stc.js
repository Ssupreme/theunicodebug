import styled, { css } from 'styled-components';
import {device} from '../../../../theme'
  
export const HeaderOuter = styled.div `
    position: relative;
    ${props => props.isUnpinned && css `
        transform: translate(0, -100%);
        visibility: hidden;
        transition: transform .5s,background .25s,visibility .25s,opacity .25s;
    `}
    ${props => props.isPinned && css `
        position: fixed !important;
        transition: transform 0.5s, background 0.25s, visibility 0.25s, opacity 0.25s;
        transform: translateY(0) !important;
        visibility: visible;
    `}
`;

export const HeaderInner = styled.div `
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    background-color: #fff;
    transition: background 0.25s;
    z-index: 999;
    ${props => props.transparent && css`
        background-color: transparent;
    `} 
`;

export const Container = styled.div `
    padding: 0 50px;
    @media ${device.small}{
        padding: 0 10vw;
    }
`;

export const HeaderMain = styled.div `
    padding: 35px 0;
    display: flex;
    align-items: center;
    @media ${device.xlarge}{
        padding: 30px 0;
    }
    @media ${device.large}{
        padding: 25px 0;
    }
    @media ${device.small}{
        padding: 10vw 0;
    }
`;

export const HeaderCol = styled.div `
    display: flex;
    flex: 1 0 auto;
    @media ${device.xsmall}{
        flex: 0 0 auto;
    }
    ${props => props.left && css `
        justify-content: flex-start;
        @media ${device.xsmall}{
            flex-basis: 60%;
        }
    `};
    ${props => props.center && css `
        justify-content: center;
    `};
    ${props => props.right && css `
        justify-content: flex-end;
        @media ${device.xsmall}{
            flex-basis: 40%;
        }
    `}
`;

export const HeaderHeight = styled.div `
    height: ${({height = 0}) => height}px;
`;


export const HeaderWrapper = styled.header `
    z-index: 999;
    position: relative;
    ${props => props.transparent && css`
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background-color: transparent;
    `};
    ${props => props.layout === 'darkHeader' && css `
        .menu-toggle{
            span{
                color: #000;
            }
        }
        .hamburger{
            span{
                background: #000;
            }
        }
    `}

    ${props => props.isStick && css `
        background-color: #fff;
        ${HeaderOuter}{
            position: absolute;
            background-color: #fff;
            right: 0;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            z-index: 10;
            transform: translate(0, -100%);
            box-shadow: 0px 8px 10px -9px rgba(0,0,0,0.5);
            will-change: transform,background;
        }
    `}
`;

export const HeaderElement = styled.div `
    display: ${props => props.display};
    ${props => props.responsive && css `
        ${props => props.responsive.medium && css `
            @media ${device.medium}{
                display: ${props => props.responsive.medium.display};
            }
        `}
    `}
`;