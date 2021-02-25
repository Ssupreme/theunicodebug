import styled from 'styled-components'
import {device} from '../../../../theme'

export const ExpandButtonWrap = styled.span `
    color: #fff;
    cursor: pointer; 
    position: relative;   
    display: inline-block;
    .icon{
        position: absolute;
        right: -30px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
        @media ${device.large}{
            font-size: 16px;
        }
        @media ${device.medium}{
            right: -20px;
        }
        @media ${device.small}{
            right: -30px;
        }
        @media ${device.xsmall}{
            font-size: 13px;
        }
        @media ${device.xxsmall}{
            font-size: 11px;
            right: -20px;
        }
    }
    span{
        font-size: 2vw;
        line-height: normal;
        padding: 0.5vh 0;
        transition: 0.3s;
        font-weight: 700;
        opacity: 1;
        text-transform: capitalize;
        &:visited{
            color: #fff;
        }
        @media ${device.medium}{
            font-size: 3vw;
        }
        @media ${device.xsmall}{
            font-size: 5vw;
        }
        &:hover{
            color: #fff;
        }
    }
`;