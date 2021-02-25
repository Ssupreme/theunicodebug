import styled, {css} from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
// import OvMap from '../../../assets/img/bg/map.png'
import {device} from '../../../theme'

export const OveralySectionWrap = styled.div `
    width: 100vw;
    left: 0;
    top: 0;
    background: #333;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    z-index: 999999;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    ${props => props.isOpen && css `
        opacity: 1;
        visibility: visible;
    `}
`;

export const OverlayLeft = styled.div `
    width: 50vw;
    @media ${device.medium}{
        width: 25%;
    }
    @media ${device.xsmall}{
        display: none;
    }
`;

export const OverlayLeftTop = styled.div `
    display: flex;
    min-height: 60%;
`;

export const OveralyLogo = styled.div `
    width: 40%;
    padding: 40px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${device.medium}{
        width: 100%;
        padding: 30px;
    }
    a{
        display: block;
    }
`;

export const MapBG = styled(BackgroundImage)`
    width: 100%;
    height: 100%;
`;

export const OverlayMap = styled.div `
    width: 60%;
    .anchor-wrap{
        position: absolute;
        left:0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    @media ${device.medium}{
        display: none;
    }
    &:hover{
        a{
            opacity: 1;
            visibility: visible;
        }
    }
    a{
        display: block;
        text-align: center;
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        &:before{
            content: "";
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.8);
            position: absolute;
            z-index: -1;
        }
        span{
            font-size: 1vw;
            color: #fff;
        }
    }
`;

export const OverlayLeftBottom = styled.div `
    display: flex;
    min-height: 40%;
`;

export const OverlaySocial = styled.div `
    width: 40%;
    padding: 40px;
    background: #001c43;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    @media ${device.medium}{
        width: 100%;
        padding: 30px;
    }
`;

export const OverlayQuickInfo = styled.div `
    width: 60%;
    background: #000;
    padding: 40px;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    @media ${device.medium}{
        display: none;
    }
`;

export const OverlayRight = styled.div `
    width: 50vw;
    background: #15171b;
    padding: 80px;
    padding-left: 0;
    min-height: 100%;
    @media ${device.medium}{
        width: 75%;
        padding: 30px;
    }
    @media ${device.xsmall}{
        width: 100%;
    }
`;

export const OveralyMenu = styled.div `
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    text-align: center;
`;

export const MenuToggleWrapper = styled.div `
    align-items: center;
    display: flex;
    flex-flow: wrap;
    justify-content: flex-end;
`;