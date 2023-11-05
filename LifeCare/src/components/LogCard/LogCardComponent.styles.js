import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 10px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  min-width: 170px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;

  & div:first-child {
    display: flex;
    flex-direction: column;

    & small:nth-child(2) {
      font-size: 0.7rem;
      font-weight: bold;
    }
  }
`;
