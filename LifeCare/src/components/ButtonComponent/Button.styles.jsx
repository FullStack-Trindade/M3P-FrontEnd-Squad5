import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 5px;
    background: ${({$outlined}) => {return $outlined ? 'transparent' : 'rgba(82, 129, 220, 1)'}};
    border: ${({$outlined}) => {return !$outlined ? 'none' : '1px solid rgba(82, 129, 220, 1)'}};
    color: ${({$outlined}) => {return !$outlined ? '#efefef' : 'rgba(82, 129, 220, 1)'}};
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    opacity: ${({$active}) => {return $active ? 1 : .5}};

    &:disabled {
        cursor: not-allowed;
    }
`