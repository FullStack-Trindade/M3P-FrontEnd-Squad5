import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

export const Header = styled.div`
  padding-left: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 230px;
  /* height: 200px; */
  font-size: 15px;
  background-color: #25869e;
  color: #fff;
  border-radius: 10px 0 10px 10px;
`;

export const Tag = styled.span`
  font-size: 20px;
  background-color: #273746;
  padding: 10px;
  border-radius: 0 0 0 10px;
`;

export const Number = styled.span`
  font-size: 50px;
  font-weight: bold;
`;

export const ServiceName = styled.h3`
  font-size: 25px;
`;
