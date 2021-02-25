import styled from 'styled-components';
import { device } from '../../theme'

export const ContentWrapper = styled.div`
    background: #001c43;
    color: #fff;
    width: 100%;
    padding: 53px 65px;
    display: flex;
    align-items: center;
    @media ${device.large}{
        padding: 40px 40px;
    }
    @media ${device.small}{
        flex-direction: column;
        padding: 30px;
    }            
`;  

export const ContentLeft = styled.div `
    flex-basis: 50%;
    @media ${device.small}{
        flex-basis: 100%;
        min-width: 100%;
    }
`;

export const ContentRight = styled.div `
    flex-basis: 50%;
    padding-left: 100px;
    @media ${device.xlarge}{
        padding-left: 40px;
        }
        @media ${device.large}{
            padding-left: 20px;
        }
        @media ${device.small}{
            flex-basis: 100%;
            min-width: 100%;
            padding-left: 0;
            padding-top: 30px;
        }
    }
`;