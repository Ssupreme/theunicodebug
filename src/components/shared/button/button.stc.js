import styled, {css} from 'styled-components'
import {device} from '../../../theme'

const ButtonWrap = styled.button`
    display: inline-block;
    color: ${props => props.theme.colors.bodyColor};
    font-size: ${props => props.fontSize};
    margin-top: ${props => props.mt};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-right: 80px;
    position: relative;
    border: none;
    padding-left: 0;
    &:before{
        position: absolute;
        content: "";
        width: 53px;
        height: 1px;
        background: #dddddd;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.5s;
    }
    &:after{
        position: absolute;
        content: "";
        width: 0;
        height: 1px;
        background: rgba(0, 0, 0, 0.5);
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.5s;
    }
    &:hover{
        &:before{
            width: 0px;
        }
        &:after{
            width: 53px;
        }
    }
    ${props => props.layout === 2 && css `
        background: #ff005a;
        color: #fff;
        line-height: 1;
        font-weight: 400;
        padding: 27px 25px;
        padding-right: 45px;
        min-height: 66px;
        border-radius: 5px;
        transition: ${props => props.theme.baseTransition};
        i{
            transition: ${props => props.theme.baseTransition};
            position: absolute;
            right: 25px;
        }
        @media ${device.xlarge}{
            padding: 20px 22px;
            padding-right: 45px;
            min-height: 53px;
        }
        &:hover{
            opacity: .8;
            i{
                right: 20px;
            }
        }
        &:hover,
        &:focus,
        &:visited{
            color: #fff;
        }
        &:before,
        &:after{
            display: none;
        }
    `}
 `

 export default ButtonWrap