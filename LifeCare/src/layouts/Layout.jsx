import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent/Header.component";
import * as Styled from "./Layout.styles";
import { SidebarComponent } from "../components/SidebarComponent/Sidebar.component";
import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderContext/Header.context";
import { ThemeContext } from "../contexts/ThemeContext/Theme.context";

export const Layout = () => {
  const { title } = useContext(HeaderContext);
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Styled.App>
      <Styled.Main>
        <HeaderComponent
          theme={theme}
          name="TESTE"
          title={title}
          userType="TIPO"
        />
        <SidebarComponent
          children={
            <Styled.Content>
              <Outlet />
            </Styled.Content>
          }
        />
      </Styled.Main>
    </Styled.App>
  );
};
