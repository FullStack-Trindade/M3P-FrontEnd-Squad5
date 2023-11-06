import styled from "styled-components";

export const CardFooter = styled.div`
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #008bf8;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;

  button {
    border-radius: 1rem;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  margin-bottom: 15px;
  width: 220px;
  min-height: 254px;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  border: 1px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;

  &:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  &:hover ${CardFooter} {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;
export const CardWrapper = styled.div`
  color: black;
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: start space-evenly;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  position: relative;
  top: 0;
  font-size: 1.3em;
  font-weight: bold;
  overflow-wrap: break-word;
  text-align: center;
  div {
    text-align: center;
    min-width: 30px;
  }
`;

export const CardBody = styled.div`
  min-height: 100px;
  width: 220px;
  display: flex;
  padding: 5px;
  color: rgb(134, 134, 134);
  text-overflow: ellipsis;
  ul {
    max-width: 220px;

    list-style-type: none;
  }
  li {
    overflow-wrap: break-word;
    max-width: 210px;

    margin-top: 3px;
  }
`;
