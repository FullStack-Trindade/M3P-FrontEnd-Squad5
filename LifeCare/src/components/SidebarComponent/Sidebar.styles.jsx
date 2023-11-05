import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const SideBarContainer = styled.div`
  background: ${({ $colors }) => $colors.cores.primary};
  color: ${({ $colors }) => $colors.texto.primary};
  height: 100vh;
  width: 200px;
  transition: all 0.5s;
  width: ${(props) => (props.$isOpen ? "200px" : "50px")};
  border-left: 4px solid ${({ $colors }) => $colors.cores.primary};
  border-right: 4px solid ${({ $colors }) => $colors.cores.primary};
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
  color: ${({ $colors }) => $colors.primary};
  padding: 10px 15px;
  gap: 15px;
  transition: all 0.5s;
  text-decoration: none;
  background-color: ${(props) => (props.$admin ? "black" : "")};
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
