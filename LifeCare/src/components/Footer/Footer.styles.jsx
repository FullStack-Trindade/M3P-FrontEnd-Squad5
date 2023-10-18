import styled from 'styled-components';

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-left: 1px solid red;
    height: 8%;
    background-color: #273746;
`

export const Socials = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    svg {
        color: #e1e1e1;
    }
`

export const Link = styled.li`
    margin-left: 10px;
`