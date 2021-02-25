import styled from 'styled-components';

export const PreloaderWrap = styled.div `
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 99999;
    display: flex;
    transition: all 0.5s ease 0s;
    &:before,
    &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        height: 100%;
        z-index: -1;
        background-color: #000000;
        transition: all 0.5s ease 0s;
    }
    &:after{
        left: auto;
        right: 0;
    }
    &.rn-preloaded:before,
    &.rn-preloaded:after{
        animation: rnPreloaderShatter 300ms ease-in-out 500ms forwards;
    }
    &.remove{
        visibility: hidden;
        opacity: 0;
        .rn-preloader-circle,
        .rn-preloader-line-mask{
            display: none;
        }
    }
    .rn-preloader-box {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
    }
    .rn-preloader-box .rn-preloader-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .rn-preloader-circle,
    .rn-preloader-line-mask {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-left: -50px;
        margin-top: -50px;
        transition: all 0.2s ease 0s !important;
    }
    .rn-preloader-circle {
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    }
    .rn-preloader-line-mask {
        overflow: hidden;
        transform-origin: 50px 50px;
        -webkit-mask-image: -webkit-linear-gradient( top, #000000 ,rgba(0, 0, 0, 0) 5%);
        -webkit-mask-image: linear-gradient( top, #000000 ,rgba(0, 0, 0, 0) 5%);
        animation: rnRotate 1.5s infinite linear;
    }
    .rn-preloader-line-mask .rn-preloader-line {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    }
    .rn-preloader-content > img{
        transition: 0.3s;
    }
    .rn-preloader-content > img {
        animation: rnPreloaderZoomInOut 1s infinite ;
    }
    .rn-preloaded .rn-preloader-box img{
        opacity: 0;
    }
    .rn-preloaded .rn-preloader-circle,
    .rn-preloaded .rn-preloader-line-mask {
        opacity: 0;
    }
`;
