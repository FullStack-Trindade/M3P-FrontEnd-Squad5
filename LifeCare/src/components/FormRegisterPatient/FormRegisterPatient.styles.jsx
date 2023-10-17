import styled from "styled-components";

export const Form = styled.form`
  background-color: #ebf3f3;
  width: 80%;
  height: 48rem;
  margin: 1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid #5281dc;
  box-shadow: 0.5rem 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.37);
  overflow-y: scroll;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  gap: 1rem;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 0.5rem;
`;

export const FormTitle = styled.legend`
  color: #12619d;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;
`;

export const FormLegend = styled.legend`
  color: #12619d;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
