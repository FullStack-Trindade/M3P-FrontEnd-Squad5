import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Columns = styled.div`
  flex: 1;
  min-width: 300px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 7px;
  padding: 10px;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  input {
    width: 100%;
    height: 30px;
    text-align: center;
    border-radius: 4px;
    font-size: 1.03rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;
