import styled from "styled-components";

export const SelectGroup = styled.div`
  display: flex;
  width: 20rem;
  flex-direction: column;
  align-items: flex-start;
`;
export const SelectLabel = styled.label`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  color: ${({ $color }) => {
    return $color === "danger" ? "#BE2E2E" : "#5281DC";
  }};
  font-size: 1.5;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FormSelect = styled.select`
  display: inline-block;
  width: 18em;
  cursor: pointer;
  padding: 1rem 1rem;
  outline: 0;
  border: 1px solid
    ${({ $color }) => {
      return $color === "danger" ? "#BE2E2E" : "#5281DC";
    }};
  border-radius: 0.5rem;
  color: ${({ $color }) => {
    return $color === "danger" ? "#BE2E2E" : "#5281DC";
  }};
  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const HelperText = styled.p`
  font-size: 0.8rem;
  color: ${({ $color }) => {
    return $color === "danger" ? "#BE2E2E" : "#5281DC";
  }};
`;
