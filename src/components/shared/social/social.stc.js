import styled, {css} from 'styled-components';
import {SocialLinkWrap} from './sociallink/sociallink.stc'
import {device} from '../../../theme'

export const SocialWrap = styled.div `
    ${SocialLinkWrap}{
        cursor: pointer;
        color: ${props => props.color};
        line-height: ${props => props.lineHeight};
        opacity: ${props => props.opacity};
        ${props => props.space && css `
            margin-left: ${props => props.space/2}px;
            margin-right: ${props => props.space/2}px;
            &:first-child{
                margin-left: 0;
            }
            &:last-child{
                margin-right: 0;
            }
        `}
        &:hover{
            opacity: 1;
            color: ${props => props.color};
        }
        ${props => props.responsive && css `
            ${props => props.responsive.xlarge && css `
                @media ${device.xlarge}{
                    font-size: ${props => props.responsive.xlarge.fontSize};
                    ${props => props.responsive.xlarge.space && css `
                        margin-left: ${props => props.responsive.xlarge.space/2}px;
                        margin-right: ${props => props.responsive.xlarge.space/2}px;
                    `}
                }
            `};
            ${props => props.responsive.large && css `
                @media ${device.large}{
                    font-size: ${props => props.responsive.large.fontSize};
                    ${props => props.responsive.large.space && css `
                        margin-left: ${props => props.responsive.large.space/2}px;
                        margin-right: ${props => props.responsive.large.space/2}px;
                    `}
                }
            `};
            ${props => props.responsive.medium && css `
                @media ${device.medium}{
                    font-size: ${props => props.responsive.medium.fontSize};
                    ${props => props.responsive.medium.space && css `
                        margin-left: ${props => props.responsive.medium.space/2}px;
                        margin-right: ${props => props.responsive.medium.space/2}px;
                    `}
                }
            `};
            ${props => props.responsive.small && css `
                @media ${device.small}{
                    font-size: ${props => props.responsive.small.fontSize};
                    ${props => props.responsive.small.space && css `
                        margin-left: ${props => props.responsive.small.space/2}px;
                        margin-right: ${props => props.responsive.small.space/2}px;
                    `}
                }
            `};
        `}
    }
    ${props => props.vertical && css `
        ${SocialLinkWrap}{
            display: block;
            ${props => props.space && css `
                margin-top: ${props => props.space/2}px;
                margin-bottom: ${props => props.space/2}px;
                &:first-child{
                    margin-top: 0;
                }
                &:last-child{
                    margin-bottom: 0;
                }
            `}
        }
    `}
`;