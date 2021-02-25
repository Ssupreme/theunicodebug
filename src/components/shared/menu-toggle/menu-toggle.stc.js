import styled, {css} from 'styled-components';
import {device} from '../../../theme'
 
export const MenuTextWrap = styled.div `
    position: relative;
    overflow: hidden;
    width: 60px;
    height: 25px;
    text-align: center;
`;

export const MenuText = styled.span `
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    text-align: center;
    height: 100%;
    @media ${device.small}{
        display: none;
    }
`;

export const MenuToggleInner = styled.div `
    align-items: center;
    display: flex;
    cursor: pointer;
    z-index: 9999;
    &:hover, &:focus{
        .hamBurger{
            span{
                &:nth-child(2){
                    width: 70%;
                }  
            }
        }
    }
    &:focus{
        .hamBurger{
            span{
                background: rgba(255, 255, 255, .6);    
            }
        }
        ${MenuText}{
            color: rgba(255, 255, 255, .6);
        }
    }
`;

export const MenuToggleWrap = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .open-text{
        transform: translateY(-100%);
    }
    ${props => props.open && css `
        .open-text{
            transform: translateY(-200%);
        }
        .close-text{
            transform: translateY(-100%);
        }
    `}
    ${props => props.sticky && css `
        ${MenuText}{
            color: #000;
        }
    `}
`;
