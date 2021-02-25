import styled, {css} from 'styled-components';
import {device} from '../../../theme'

export const LogoWrapper = styled.div `
    position: relative;
    .white-logo{
        opacity: 1;
        visibility: visible;
    }
    .black-logo{
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        visibility: hidden;
    }
    ${props => props.layout === 'darkHeader' && css `
        .white-logo{
            opacity: 0;
            visibility: hidden;
        }
        .black-logo{
            opacity: 1;
            visibility: visible;
        }
    `}
    ${props => props.darkLogo && css `
        .white-logo{
            opacity: 0;
            visibility: hidden;
        }
        .black-logo{
            opacity: 1;
            visibility: visible;
        }
    `}
    ${props => props.sticky && css `
        .white-logo{
            opacity: 0;
            visibility: hidden;
        }
        .black-logo{
            opacity: 1;
            visibility: visible;
        }
    `}
    ${props => props.responsive && css `
        ${props => props.responsive.xlarge && css `
            @media ${device.xlarge}{
                max-width: ${props => props.responsive.xlarge.maxwidth};
            }
        `};
        ${props => props.responsive.large && css `
            @media ${device.large}{
                max-width: ${props => props.responsive.large.maxwidth};
            }
        `};
        ${props => props.responsive.medium && css `
            @media ${device.medium}{
                max-width: ${props => props.responsive.medium.maxwidth};
            }
        `};
        ${props => props.responsive.small && css `
            @media ${device.small}{
                max-width: ${props => props.responsive.small.maxwidth};
            }
        `};
        ${props => props.responsive.xsmall && css `
            @media ${device.xsmall}{
                max-width: ${props => props.responsive.xsmall.maxwidth};
            }
        `};
    `}
`;