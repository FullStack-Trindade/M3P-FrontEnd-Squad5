import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent/Header.component";
import * as Styled from "./Layout.styles";
import { SidebarComponent } from "../components/SidebarComponent/Sidebar.component";
import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../contexts/HeaderContext/Header.context";

export const Layout = () => {
  const { title } = useContext(HeaderContext);
  const [showContent, setShowContent] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setShowContent(true)
    }, 3000)
  })

  return (
    <Styled.App>
      <Styled.Main>
        <HeaderComponent name="TESTE" title={title} userType="TIPO" />
        <SidebarComponent
          children={
            <Styled.Content>
              {showContent ? (
                <Outlet />
              ) : (
                <Styled.Paragraph>Loading...</Styled.Paragraph>
              )}
            </Styled.Content>
          }
        />
      </Styled.Main>
    </Styled.App>
  );
};
