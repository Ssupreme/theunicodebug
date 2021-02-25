import styled, {css} from 'styled-components';
import {device} from '../../../theme'


export const TextWrapper = styled.p `
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    text-align: ${props => props.align};
    line-height: ${props => props.lineHeight};
    max-width: ${props => props.maxWidth};
    font-weight: ${props => props.fontweight};
    letter-spacing: ${props => props.letterspacing};
    text-transform: ${props => props.texttransform};
    opacity: ${props => props.opacity};
    display: ${props => props.display};
    margin: ${props => props.m};
    margin-bottom: ${props => props.mb};
    margin-top: ${props => props.mt};
    padding: ${props => props.p};
    position: ${props => props.position};
    top: ${props => props.top};
    left: ${props => props.left};
    transform: ${props => props.transform};
    z-index: ${props => props.zindex};
    padding-top: ${props => props.pt};
    ${props => props.responsive && css `
        ${props => props.responsive.xlarge && css `
            @media ${device.xlarge}{
                font-size: ${props => props.responsive.xlarge.fontSize};
                margin-bottom: ${props => props.responsive.xlarge.mb};
                line-height: ${props => props.responsive.xlarge.lineHeight};
                padding: ${props => props.responsive.xlarge.p};
                padding-top: ${props => props.responsive.xlarge.p};
            }
        `};
        ${props => props.responsive.large && css `
            @media ${device.large}{
                font-size: ${props => props.responsive.large.fontSize};
                line-height: ${props => props.responsive.large.lineHeight};
                margin-bottom: ${props => props.responsive.large.mb};
                padding: ${props => props.responsive.large.p};
                padding-top: ${props => props.responsive.large.pt};
            }
        `};
        ${props => props.responsive.medium && css `
            @media ${device.medium}{
                font-size: ${props => props.responsive.medium.fontSize};
                line-height: ${props => props.responsive.medium.lineHeight};
                margin-bottom: ${props => props.responsive.medium.mb};
                padding: ${props => props.responsive.medium.p};
                padding-top: ${props => props.responsive.medium.pt};
            }
        `};
        ${props => props.responsive.small && css `
            @media ${device.small}{
                font-size: ${props => props.responsive.small.fontSize};
                padding: ${props => props.responsive.small.p};
                padding-top: ${props => props.responsive.small.pt};
            }
        `};
        ${props => props.responsive.xsmall && css `
            @media ${device.xsmall}{
                font-size: ${props => props.responsive.xsmall.fontSize};
                padding: ${props => props.responsive.xsmall.p};
                padding-top: ${props => props.responsive.xsmall.pt};
            }
        `};
    `}
`;