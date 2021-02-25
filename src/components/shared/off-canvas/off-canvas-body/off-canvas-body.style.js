import styled from 'styled-components';
import {device} from '../../../../theme'

export const OffCanvasBodyWrap = styled.div `
    padding: 20px 40px 100px;
    @media ${device.xsmall}{
        padding: 20px 30px 100px;
    }
`;