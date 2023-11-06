import styled from "styled-components";

export const SelectGroup = styled.div`
  display: flex;
  position: relative;
  width: 20rem;
  flex-direction: column;
  align-items: flex-start;
`;
export const SelectLabel = styled.label`
  display: flex;
  position: absolute;
  left: 0.5rem;
  top: -0.8rem;
  align-items: flex-start;
  background-color: ${({ $color }) => $color.cores.secondary};
  z-index: 5;
  align-self: stretch;
  color: ${({ $color }) => {
    return $color === "danger" ? "#BE2E2E" : $color.texto.primary;
  }};
  font-size: 1.5;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FormSelect = styled.select`
  display: inline-block;
  width: 15rem;
  cursor: pointer;
  padding: 1rem 1rem;
  outline: 0;
  font-size: 1rem;
  border: 1px solid
    ${({ $color }) => {
      return $color === "danger" ? "#BE2E2E" : "#5281DC";
    }};
  border-radius: 0.5rem;
  color: ${({ $color }) => {
    return $color === "danger" ? "#BE2E2E" : $color.texto.primary;
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
