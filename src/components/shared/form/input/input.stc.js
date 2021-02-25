import styled, { css } from 'styled-components';
import { device } from '../../../../theme'

export const InputWrap = styled.input`
    color: #7c7d7e;
    font-size: 18px;
    font-weight: 300;
    border: 0 none;
    border-bottom: 1px solid #ebebec;
    padding: 0;
    height: 50px;
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