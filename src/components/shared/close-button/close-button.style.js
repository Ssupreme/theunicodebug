import styled from 'styled-components';


export const CloseButtonWrap = styled.button `
    height: 40px;
    width: 40px;
    line-height: 40px;
    padding: 0;
    background: transparent;
    border: none;
    span{
        position: relative;
        cursor: pointer;
        display: inline-block;
        width: 100%;
        height: 100%;
        &:before, &:after{
            position: absolute;
            top: 23px;
            left: 8px;
            content: '';
            width: 24px;
            height: 3px;
            background: ${props => props.theme.colors.themeColorBlack};
            transform-origin: 50% 50%;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        &:before{
            transform: rotate(45deg);
        }
        &:after{
            transform: rotate(-45deg);
        }
    }
    &:hover{
        span{
            color: ${props => props.theme.colors.themeColor};
            &:before, &:after{
                transform: none;
            }
        }
    }
`;