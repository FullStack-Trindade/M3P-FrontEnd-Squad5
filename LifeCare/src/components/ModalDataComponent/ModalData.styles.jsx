import styled from 'styled-components';

export const DataWrapper = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: red;
    z-index: 3;
    border-radius: 10px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
`

export const RoleTitle = styled.h3`
    font-size: 25px;
    font-weight: bold;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: yellow;
    border-radius: 10px;
`

export const Wrap = styled.div`
    display: inline-flex;
    background-color: blue;
`