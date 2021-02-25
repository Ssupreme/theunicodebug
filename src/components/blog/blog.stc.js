import styled from 'styled-components';
import {device} from '../../theme'

export const BlogWrapper = styled.div `
    display: flex;
    margin-bottom: 50px;
    position: relative;
    z-index: 2;
    @media ${device.xlarge}{
        flex-direction: column;
    }
`;

export const Thumb = styled.div `
    flex-basis: 50%;
    position: relative;
    @media ${device.xlarge}{
        flex-basis: 100%;
    }
    a{
        display: block;
    }
    *{
        height: 100%;
    }
    .gatsby-image-wrapper,
    picture,
    img{
        width: 100%;
        max-width: 100% !important;
    }
    img{
        border-radius: 5px 0 0 5px;
    }
`;

export const Category = styled.div `
    position: absolute !important;
    top: 30px;
    left: 30px;
    a{
        border: 2px solid #808585;
        display: block;
        height: 24px;
        padding: 0 15px;
        line-height: 20px;
        color: #ffffff;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 700;
        border-radius: 11px;
        letter-spacing: 1px;
    }
`;

export const Content = styled.div `
    flex-basis: 65%;
    padding: 40px 40px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    @media ${device.xlarge}{
        flex-basis: 100%;
    }
    @media ${device.small}{
        flex-basis: 100%;
        padding: 10vw;
    }
`;

export const ContentTop = styled.div ``;
export const ContentBottom = styled.div ``;

export const PostDate = styled.span `
    color: #000000;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 1px;
    display: inline-block;
    margin-bottom: 6px;
`;

export const PostTitle = styled.h2 `
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 12px;
    @media ${device.medium}{
        font-size: 25px;
    }
    @media ${device.small}{
        font-size: 16px;
    }
    a{
        color: #000;
    }
`;

export const Excerpt = styled.p `
    color: #000000;
    font-size: 14px;
    line-height: 24px;
    @media ${device.small}{
        font-size: 12px;
    }
`;

export const PostMeta = styled.ul `
    display: flex;
    padding: 0;
    list-style: none;
    margin-top: 34px;
    margin-bottom: 0;
    @media ${device.small}{
        margin-top: 20px;
    }
    li{
        margin: 0 15px;
        @media ${device.medium}{
            margin: 0 10px;
        }
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
        i{
            padding-right: 7px;
        }
        a{
            color: #000;
        }
    }
`;









