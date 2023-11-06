import styled from "styled-components";

export const Form = styled.form`
  display: inline-flex;
  padding: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 10px 10px 10px 0 #2aaeeb;
  min-width: 500px;
`;

export const Header = styled.div`
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-items: stretch;
`;

export const Title = styled.h1`
  color: #000;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
  line-height: normal;
`;

export const Subtitle = styled.p`
  color: #5d6d7e;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const InputGroup = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 18px;
  width: 80%;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  width: 60%;
  justify-content: center;
  align-self: center;
  border-radius: 5px;
  border: none;
  background-color: #03dffc;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #000;
    box-shadow: 0 5px 15px rgba(52, 129, 202, 0.4);
  }
`;

export const ForgotPass = styled.a`
  color: #5d6d7e;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #000;
    box-shadow: 0 5px 15px rgba(52, 129, 202, 0.4);
  }
`;
