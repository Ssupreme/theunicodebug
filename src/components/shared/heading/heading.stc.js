import styled, {css} from 'styled-components';
import {device} from '../../../theme'

export const HeadingWrapper = styled.h2 `
    font-size: ${props => props.fontSize};
    color: ${props => props.color || props.theme.colors.headingColor}; 
    color: ${props => props.color === 'primary' && props.theme.colors.primary}; 
    font-weight: ${props => props.fontweight};
    letter-spacing: ${props => props.letterspacing}; 
    line-height: ${props => props.lineHeight}; 
    text-transform: ${props => props.texttransform};
    margin: ${props => props.m};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    ${props => props.responsive && css `
        ${props => props.responsive.xlarge && css `
            @media ${device.xlarge}{
                font-size: ${props => props.responsive.xlarge.fontSize};
                line-height: ${props => props.responsive.xlarge.lineHeight}; 
                font-weight: ${props => props.responsive.xlarge.fontweight};
                letter-spacing: ${props => props.responsive.xlarge.letterspacing};
                margin: ${props => props.responsive.xlarge.m};
                margin-top: ${props => props.responsive.xlarge.mt};
                margin-bottom: ${props => props.responsive.xlarge.mb};
                margin-left: ${props => props.responsive.xlarge.ml};
                margin-right: ${props => props.responsive.xlarge.mr};
            }
        `};
        ${props => props.responsive.large && css `
            @media ${device.large}{
                font-size: ${props => props.responsive.large.fontSize};
                line-height: ${props => props.responsive.large.lineHeight}; 
                font-weight: ${props => props.responsive.large.fontweight};
                letter-spacing: ${props => props.responsive.large.letterspacing};
                margin: ${props => props.responsive.large.m};
                margin-top: ${props => props.responsive.large.mt};
                margin-bottom: ${props => props.responsive.large.mb};
                margin-left: ${props => props.responsive.large.ml};
                margin-right: ${props => props.responsive.large.mr};
            }
        `};
        ${props => props.responsive.medium && css `
            @media ${device.medium}{
                font-size: ${props => props.responsive.medium.fontSize};
                line-height: ${props => props.responsive.medium.lineHeight}; 
                font-weight: ${props => props.responsive.medium.fontweight};
                letter-spacing: ${props => props.responsive.medium.letterspacing};
                margin: ${props => props.responsive.medium.m};
                margin-top: ${props => props.responsive.medium.mt};
                margin-bottom: ${props => props.responsive.medium.mb};
                margin-left: ${props => props.responsive.medium.ml};
                margin-right: ${props => props.responsive.medium.mr};
            }
        `};
        ${props => props.responsive.small && css `
            @media ${device.small}{
                font-size: ${props => props.responsive.small.fontSize};
                line-height: ${props => props.responsive.small.lineHeight}; 
                font-weight: ${props => props.responsive.small.fontweight};
                letter-spacing: ${props => props.responsive.small.letterspacing};
                margin: ${props => props.responsive.small.m};
                margin-top: ${props => props.responsive.small.mt};
                margin-bottom: ${props => props.responsive.small.mb};
                margin-left: ${props => props.responsive.small.ml};
                margin-right: ${props => props.responsive.small.mr};
            }
        `};
    `}
`;