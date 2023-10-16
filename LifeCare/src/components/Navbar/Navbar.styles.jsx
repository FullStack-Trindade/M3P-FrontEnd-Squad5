import styled from 'styled-components';

export const Navbar = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #273746;
    height: 100%;
    width: 20%;
`

export const Services = styled.ul`
    position: relative;
    padding: 10px;
    background-color: red;
    list-style: none;
    li {
        text-align: center;
        margin-bottom: 50px;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
        a {
            text-decoration: none;
            color: black;
        }
    }
`

export const CollapseButton = styled.button`
    color: #e1e1e1;
    background-color: blue;
    border: none;
    cursor: pointer;
`