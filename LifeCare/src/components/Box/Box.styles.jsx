import styled from 'styled-components';

export const BoxWrapper = styled.div`
    display: flex;
    width: 100%;
`

export const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 200px;
    margin: 5px;
    font-size: 15px;
    background-color: #25869e;
    color: #fff;
    border-radius: 10px 0 10px 10px;
`

export const Tag = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    background-color: #273746;
    padding: 10px;
    border-radius: 0 0 0 10px;
`

export const Number = styled.span`
    font-size: 50px;
    font-weight: bold;
`

export const ServiceName = styled.h3`
    font-size: 25px;
`