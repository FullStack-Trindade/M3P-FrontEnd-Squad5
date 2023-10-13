import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Icon = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
