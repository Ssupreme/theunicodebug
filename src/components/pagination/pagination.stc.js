import styled, {css} from 'styled-components';
import Anchor from '../shared/link'
import {device} from '../../theme'

export const PaginationWrap = styled.div `
    position: relative;
    z-index: 2;
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
    @media ${device.medium}{
        padding-bottom: 23px;
    }
    @media ${device.small}{
        padding-bottom: 23px;
    }
`;

export const PaginationList = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const PaginationItem = styled.li `
    display: inline-block;
    &:not(:last-child){
        margin-right: 8px;
    }
`;

export const PaginationLink = styled(Anchor) `
    display: block;
    padding: 5px;
    min-width: 45px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.borderColor};
    color: ${props => props.theme.colors.bodyColor};
    text-align: center;
    font-size: 16px;
    ${props => props.active === 'true' && css `
        background: ${props => props.theme.colors.primary};
        color: #fff;
        border-color: ${props => props.theme.colors.primary};  
        &:visited,
        &:hover,
        &:active,
        &:focus{
            color: #fff;
        }
    `}
    ${props => props.disabled && css `
        color: #ccc;
        cursor: not-allowed;
    `}
    &.prev,
    &.next{
        padding: 5px 20px;
    }
`;