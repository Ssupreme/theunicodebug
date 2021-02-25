import styled from 'styled-components';

export const PageScrollBarWrap = styled.div `
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 2px;
    appearance: none;
    border: none;
    background-color: transparent;
    color: #000; 
`;

export const PageScroll = styled.div `
    height: 2px;
    background: #000;
    width: ${props => props.scroll}%;
`;