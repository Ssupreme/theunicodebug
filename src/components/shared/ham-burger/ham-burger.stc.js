import styled, {css} from 'styled-components';

export const HamburgerWrap = styled.div `
    display: inline-block;
    padding-left: 15px;
`;

export const HamburgerInner = styled.div `
    width: 30px;
    span{
        transition: .5s;
        width: 30px;
        height: 2px;
        top: 0;
        left: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 4px;
        margin-bottom: 4px;
        display: block;
        background: #ffffff;
    }
    ${props => props.open && css `
        span{
            &:nth-child(1),
            &:nth-child(3){
                width: 0%;
            }
            &:nth-child(2){
                width: 70%;
            }
        }
    `}
    ${props => props.sticky && css `
        span{
            background: #000;
        }
    `}
`;