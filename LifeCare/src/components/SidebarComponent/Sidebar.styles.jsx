import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const SideBarContainer = styled.div`
  background: ${({ $colors }) => $colors.secondary};
  color: #0a43ac;
  height: 100vh;
  width: 200px;
  transition: all 0.5s;
  width: ${(props) => (props.$isOpen ? "200px" : "50px")};
  border-left: 4px solid #8ae9f0;
  border-right: 4px solid #8ae9f0;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;
`;

export const Main = styled.main`
  width: 100%;
  padding: 20px;
`;

export const Bars = styled.div`
  display: flex;
  font-size: 25px;
  margin-left: ${(props) => (props.$isOpen ? "30px" : "0px")};
`;

export const Logo = styled.h1`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  font-size: 30px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  color: #0a43ac;
  padding: 10px 15px;
  gap: 15px;
  transition: all 0.5s;
  text-decoration: none;
  background-color: ${(props) => (props.$admin ? "white" : "")};
  &:hover {
    background: rgb(81, 209, 226);
  }
`;

export const Icon = styled.div`
  font-size: 16px;
`;

export const LinkText = styled.div`
  font-size: 16px;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  &.active {
    background: lightskyblue;
    color: #206c8f;
  }
`;
