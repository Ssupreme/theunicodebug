import styled from 'styled-components'
import { Link } from 'gatsby';
import {device} from '../../../../theme'

export const NavLinkWrap = styled(Link) `
    display: block;
    color: #fff;
    font-size: 2vw;
    line-height: normal;
    padding: 0.5vh 0;
    transition: 0.3s;
    font-weight: 700;
    opacity: 1;
    text-transform: capitalize;
    &:visited{
        color: #fff;
    }
    @media ${device.medium}{
        font-size: 3vw;
    }
    @media ${device.xsmall}{
        font-size: 5vw;
    }
    &:hover{
        color: #fff;
    }
    &.active{
        color: #fff;
    }
`; 