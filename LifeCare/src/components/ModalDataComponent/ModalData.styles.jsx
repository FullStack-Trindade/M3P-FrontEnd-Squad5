import styled from 'styled-components';

export const DataWrapper = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: #dfdfdf;
    z-index: 3;
    border-radius: 10px;
    border: 5px solid #65d5fb;
`

export const Wrapper = styled.div`
    display: inline-block;
    margin: 0 5px;
`

export const PatientInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
`

export const BoxDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const RoleTitle = styled.h3`
    font-size: 25px;
    font-weight: bold;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 5px 0;
    background-color: #65d5fb;
    border-radius: 10px;
    button {
        border: none;
        border-radius: 10px;
        a {
            text-decoration: none;
            font-size: 18px;
        }
    }
`