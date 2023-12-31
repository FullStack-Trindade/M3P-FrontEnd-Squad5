import React, { useContext, useState } from "react";
import {
  FaBars,
  FaArrowRight,
  FaListUl,
  FaRunning,
  FaBriefcaseMedical,
  FaCashRegister,
} from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { RiMedicineBottleFill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { MdHome } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import * as Styled from "./Sidebar.styles";
import { ThemeContext } from "../../contexts/ThemeContext/Theme.context";

import { useAuth } from "../../hooks";

const menuItem = [
  {
    path: "/",
    name: "Home",
    icon: <MdHome />,
    admin: false,
  },
  {
    path: "/cadastro/paciente",
    name: "Cadastro de Paciente",
    icon: <HiMiniUsers />,
    admin: false,
  },
  {
    path: "/cadastro/consulta",
    name: "Cadastro de Consulta",
    icon: <FaBriefcaseMedical />,
    admin: false,
  },
  {
    path: "/cadastro/exame",
    name: "Cadastro de Exame",
    icon: <LiaFileMedicalAltSolid />,
    admin: false,
  },
  {
    path: "/cadastro/medicamento",
    name: "Cadastro de Medicamento",
    icon: <RiMedicineBottleFill />,
    admin: false,
  },
  {
    path: "/cadastro/dieta",
    name: "Cadastro de Dieta",
    icon: <IoFastFood />,
    admin: false,
  },

  {
    path: "/cadastro/exercicio",
    name: "Cadastro de Exercício",
    icon: <FaRunning />,
    admin: false,
  },

  {
    path: "/prontuario",
    name: "Prontuários",
    icon: <FaListUl />,
    admin: false,
  },
];

const adminMenuItens = [
  {
    path: "/cadastro/usuarios",
    name: "Cadastro de Usuários",
    icon: <FiUserPlus />,
    admin: true,
  },

  {
    path: "/admin/logs",
    name: "Logs",
    icon: <FaCashRegister />,
    admin: true,
  },
  {
    path: "/configuracoes",
    name: "Configuracões",
    icon: <LuSettings />,
    admin: true,
  },
];

export const SidebarComponent = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { logout, getRole } = useAuth();
  const { role } = getRole();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Styled.Container>
      <Styled.SideBarContainer $colors={theme} $isOpen={isOpen}>
        <Styled.TopSection>
          <Styled.Logo $isOpen={isOpen} />
          <Styled.Bars $isOpen={isOpen}>
            <FaBars onClick={toggle} />
          </Styled.Bars>
        </Styled.TopSection>
        {menuItem.map((item, index) => (
          <Styled.StyledLink
            $colors={theme}
            to={item.path}
            key={index}
            $admin={item.admin}
          >
            <Styled.Icon>{item.icon}</Styled.Icon>
            <Styled.LinkText $isOpen={isOpen}>{item.name}</Styled.LinkText>
          </Styled.StyledLink>
        ))}
        {role === "admin" &&
          adminMenuItens.map((item, index) => (
            <Styled.StyledLink
              $colors={theme}
              to={item.path}
              key={index}
              $admin={item.admin}
            >
              <Styled.Icon>{item.icon}</Styled.Icon>
              <Styled.LinkText $isOpen={isOpen}>{item.name}</Styled.LinkText>
            </Styled.StyledLink>
          ))}

        <Styled.StyledLink
          $colors={theme}
          to={"/login"}
          $admin={false}
          onClick={logout}
        >
          <Styled.Icon>{<FaArrowRight />}</Styled.Icon>
          <Styled.LinkText $isOpen={isOpen}>{"Sair"}</Styled.LinkText>
        </Styled.StyledLink>
      </Styled.SideBarContainer>

      <Styled.Main>{children}</Styled.Main>
    </Styled.Container>
  );
};
