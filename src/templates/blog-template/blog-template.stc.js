import styled, {css} from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {device} from '../../theme';

export const BlogDetailsWrap = styled.div `
    
`
export const BlogDetailsHeader = styled(BackgroundImage) `
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
    min-height: 70vh;
    padding: 130px 0;
    display: flex;
    align-items: center;
    & > .row{
        flex-wrap: nowrap;
        @media ${device.small}{
            flex-wrap: wrap;
        }
    }
    @media ${device.xlarge}{
        .col-1.offset-1 {
            margin-left: 0;
        }
    }
    @media ${device.medium}{
        .col-1.offset-1 {
            margin-left: 20vw;
        }
    }
    @media ${device.small}{
        min-height: 450px;
        padding-top: 150px;
        .col-1.offset-1 {
            margin-left: 10vw;
        }
    }
    &.gatsby-image-wrapper{
        z-index: -1;
    }
`;

export const BlogDetailsMetaWrap = styled.div ``;

export const BlogDetailsMeta = styled.div `
    margin-bottom: ${props => props.mb};
    ${props => props.responsive && css `
        ${props => props.responsive.small && css `
            @media ${device.small}{
                margin-bottom: ${props => props.responsive.small.mb};
                padding-top: ${props => props.responsive.small.pt};
                padding-bottom: ${props => props.responsive.small.pb};
            }
        `}
    `}
`;

export const BlogDetailsContent = styled.div `
    background: #f8f8f8;
    z-index: -1 !important;
    .gatsby-image-wrapper{
        z-index: 2;
    }
    padding-top: 130px;
    @media ${device.medium}{
        padding-top: 70px;
    }
    @media ${device.small}{
        padding-top: 10vw;
    }    
    .container{
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        @media ${device.xsmallOnly}{
            max-width: 540px;
        }
        @media ${device.smallOnly}{
            max-width: 720px;
        }
        @media ${device.mediumOnly}{
            max-width: 960px;
        }
        @media ${device.largeOnly}{
            max-width: 1200px;
        }
    }
    .row{
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        [class^="col"]{
            position: relative;
            width: 100%;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
        }
    }
    .col{
        &-12{
            flex: 0 0 100%;
            max-width: 100%;
        }
        &-lg{
            &-4{
                @media ${device.mediumOnly}{
                    flex: 0 0 33.333333%;
                    max-width: 33.333333%;
                }
            }
            &-6{
                @media ${device.mediumOnly}{
                    flex: 0 0 50%;
                    max-width: 50%;
                }
            }
        }
    }
    .offset{
        &-lg{
            &-2{
                @media ${device.mediumOnly}{
                    margin-left: 16.666667%;
                }
            }
        }
    }
    .rn-blog-meta-area{
        @media ${device.xlarge}{
            .col-2.offset-1{
                margin-left: 20vw;
            }
        }
        @media ${device.small}{
            .col-2.offset-1{
                margin-left: 10vw;
            }
        }
    }
    .rn-blog-content{
        margin-top: -7px;
        margin-bottom: -18px;
    }
    h2{
        font-size: 40px;
        line-height: 55px;
        color: ${props => props.theme.colors.primary};
        @media ${device.medium}{
            font-size: 24px;
            line-height: initial;
        }
    }
    .section-ptb-xl{
        padding: 130px 0;
        @media ${device.medium}{
            padding: 70px 0;
        }
        @media ${device.small}{
            padding: 10vw 0;
        }
    }
    .section-pb-xl{
        padding-bottom: 130px;
        @media ${device.medium}{
            padding-bottom: 70px;
        }
        @media ${device.small}{
            padding-bottom: 10vw;
        } 
    }
    .full-width-box{
        padding-left: 80px;
        padding-right: 80px;
        @media ${device.xlarge}{
            padding-left: 10vw;
            padding-right: 10vw;
        }
    }
`;

export const CommentWrap = styled.div `
    padding-top: 70px;
    padding-bottom: 70px;
    background: #f8f8f8;
    padding-right: 10vw;
    padding-left: 10vw;
`;

export const CommentFormWrap = styled.div `
    max-width: 700px;
    margin: 0 auto;
`; 