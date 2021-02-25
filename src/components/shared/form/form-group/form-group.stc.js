import styled, { css } from 'styled-components'
import { device } from '../../../../theme'

export const FormGroupWrap = styled.fieldset`
    position: relative;
    border: none;
    margin: 0;
    min-width: auto;
    width: 100%;
    padding: 0;   
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    ${props => props.responsive && css`
        ${props => props.responsive.xsmall && css`
            @media ${device.xsmall}{
                margin-top: ${props => props.responsive.xsmall.mt};
                margin-bottom: ${props => props.responsive.xsmall.mb};
            }
        `}
    `}
`; 