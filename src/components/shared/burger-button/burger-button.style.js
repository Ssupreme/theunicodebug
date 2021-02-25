import styled from 'styled-components'

export const BurgerButtonWrap = styled.button `
    width: 24px;
    height: 25px;
    position: relative;    
    background: transparent;
    border: none;
    padding: 0;
    span{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: 2px;
        background-color: #333;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:after, 
        &:before{
            position: absolute;
            background-color: #333;
            content: "";
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            left: 0;
            width: 100%;
            height: 2px;
        }
        &:before{
            bottom: 8px;
        }
        &:after{
            bottom: -8px;
        }
    }
    &:hover{
        span{
            background-color: ${props => props.theme.colors.themeColor};
            &:before{
                width: 80%;
                background-color: ${props => props.theme.colors.themeColor};
            }
            &:after{
                width: 60%;
                background-color: ${props => props.theme.colors.themeColor};
            }
        }
    }
`;