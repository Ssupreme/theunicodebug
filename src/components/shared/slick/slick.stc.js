import styled from 'styled-components';
import Slider from "react-slick";
import {device} from '../../../theme'

export const SliderWrap = styled(Slider) `
    .slick-arrow{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 9;
        color: #fff;
        font-size: 20px;
        border: none;
        padding: 0;
        &.slick-prev{
            left: 50px;
            @media ${device.small}{
                left: 30px;
            }
            @media ${device.xsmall}{
                left: 10px;
            }
        }
        &.slick-next{
            right: 50px;
            @media ${device.small}{
                right: 30px;
            }
            @media ${device.xsmall}{
                right: 10px;
            }
        }
    }
    .slick-dots{
        margin: 0;
        padding: 0;
        text-align: center;
        margin-top: 50px;
        line-height: 0;
        @media ${device.small}{
            margin-top: 20px;
        }
        li{
            list-style: none;
            display: inline-block;
            text-align: center;
            margin: auto 10px;
            &.slick-active{
                button{
                    background: rgba(0, 0, 0, 0.5);
                }
            }
            button {
                border: none;
                width: 10px;
                height: 10px;
                padding: 0;
                display: block;
                background: rgba(0, 0, 0, 0.1);
                border-radius: 100%;
                text-indent: -99999999999px;
                transition: 0.3s;
            }
        }
    }
    .slick-slide
    .slick-slide > div,
    .slick-slide .item{
        outline: none;
    }
`;