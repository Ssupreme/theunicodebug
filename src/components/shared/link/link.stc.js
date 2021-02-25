import styled, {css} from 'styled-components';
import {Link} from 'gatsby';
import {device} from '../../../theme'

export const LinkStyled = css `
    color: ${props => props.color || props.theme.colors.themeColor};
    color: ${props => props.color === 'textColor' ?  props.theme.colors.textColor : ''};
    font-size: ${props => props.fontSize};
    text-align: ${props => props.align};
    line-height: ${props => props.lineHeight};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    max-width: ${props => props.maxWidth};
    font-weight: ${props => props.fontweight};
    opacity: ${props => props.opacity};
    cursor: pointer;
    ${props => props.responsive && css `
        @media ${device.xlarge}{
            font-size: ${props => props.responsive.xlarge.fontSize};
        }

        @media ${device.medium}{
            font-size: ${props => props.responsive.medium.fontSize};
        }
    `}
    &:hover{
        ${props => props.opacity && css `
            opacity: 1;
            color: ${props => props.color || props.theme.colors.themeColor};
        `}
    }
`;

export const LinkWrapper = styled(Link)`
    ${LinkStyled}
`;

export const AnchorTag = styled.a`
    ${LinkStyled}
`;