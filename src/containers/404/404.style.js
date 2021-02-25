import styled from 'styled-components'
import {device} from '../../theme'

export const ErrorWrap = styled.div `
    max-width: 700px;
    margin: 0 auto;
    padding: 100px 0;
    height: 100vh;
    text-align: center;
    h1{
        color: #001c43;
        font-size: 200px;
        letter-spacing: 5px;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        line-height: 1;
        @media ${device.large}{
            font-size: 150px;
        }
        @media ${device.medium}{
            font-size: 100px;
        }
        @media ${device.small}{
            font-size: 80px;
        }
    }
    h2{
        font-size: 50px;
        margin-bottom: 30px;
        margin-top: 10px;
        font-family: 'Poppins', sans-serif;
        line-height: 1;
        @media ${device.medium}{
            font-size: 40px;
        }
    }
    a{
        font-family: 'Poppins', sans-serif;
        display: inline-block;
        background: #001c43;
        padding: 13px 25px;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        border: 1px solid #001c43;
        transition: all .3s;
        &:hover{
            background: transparent;
            color: #001c43;
        }
    }
`;