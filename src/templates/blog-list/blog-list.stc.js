import styled from 'styled-components';
import {device} from '../../theme'

export const SectionWrap = styled.div `
    padding-top: 130px;
    background: #f8f8f8;
    @media ${device.medium}{
        padding-top: 70px;
    }
    @media ${device.small}{
        padding-top: 60px;
    }
`;

export const BlogInner = styled.div `
    margin-top: 48px;
    .blog-wrap{
        margin-top: 50px;
        @media ${device.small}{
            margin-top: 35px;
        }
    }
    .col-2:nth-child(odd) {
        padding-right: 30px;
        @media ${device.small}{
            padding-right: 0;
        }
    }
    .col-2:nth-child(even) {
        padding-left: 30px;
        @media ${device.small}{
            padding-left: 0;
        }
    }
`;