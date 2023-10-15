import styled from 'styled-components';

export const Form = styled.form`
    display: inline-flex;
    position: absolute;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 10px 10px 10px 0 #03fc4e;
    min-width: 600px;
    z-index: 2;
`

export const Header = styled.div`
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    color: #5d6d7e;
    margin-bottom: 20px;
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
`

export const SubTitle = styled.p`
    color: #5d6d7e;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const InputGroup = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
`

export const Action = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Button = styled.button`
    display: flex;
    padding: 8px 16px;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 5px;
    border: none;
    background-color: #03dffc;
`