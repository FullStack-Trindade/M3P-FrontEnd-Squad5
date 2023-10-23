import styled from 'styled-components';

export const HandbookWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: transparent;

`

export const HandbookInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vw;
    background-color: #4b9fbb;
    border-radius: 20px;
`

export const Input = styled.input`
    display: flex;
    width: 100%;
    border-radius: 10px;
    border: none;
    padding: 10px;
    margin: 10px 0;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    height: 10%;
    width: 95%;
    margin-top: 10px;
    border-radius: 20px;
`

export const Role = styled.span`
    font-size: 18px;
    font-size: 500;
    color: blue;
`