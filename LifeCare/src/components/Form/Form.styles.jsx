import styled from "styled-components";

export const Form = styled.form`
  background-color: ${({ $colors }) => $colors.secondary};
  width: 65rem;
  height: 38rem;
  margin: 1rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0.5rem 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.37);
  overflow-y: scroll;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  gap: 1rem;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  margin: 0.5rem;
`;

export const FormTitle = styled.legend`
  color: ${({ $colors }) => $colors.primary};
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 1rem;
`;
export const FormSubTitle = styled.legend`
  color: ${({ $colors }) => $colors.secondary};
  font-size: 1rem;
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
