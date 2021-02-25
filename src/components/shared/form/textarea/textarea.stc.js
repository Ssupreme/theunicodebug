import styled, { css } from 'styled-components';
import { device } from '../../../../theme'

export const TextareaWrap = styled.textarea`
    color: #7c7d7e;
    font-size: 18px;
    border: 0 none;
    border-bottom: 1px solid #ebebec;
    min-height: 100px;
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    width: 100%;
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: ${props => props.theme.colors.headingColor};
    }
    &::-moz-placeholder { /* Firefox 19+ */
        color: ${props => props.theme.colors.headingColor};
    }
    &:-ms-input-placeholder { /* IE 10+ */
        color: ${props => props.theme.colors.headingColor};
    }
    &:-moz-placeholder { /* Firefox 18- */
        color: ${props => props.theme.colors.headingColor};
    }
    ${props => props.responsive && css`
        ${props => props.responsive.xsmall && css`
            @media ${device.xsmall}{
                margin-top: ${props => props.responsive.xsmall.mt};
                margin-bottom: ${props => props.responsive.xsmall.mb};
            }
        `}
    `}
`;