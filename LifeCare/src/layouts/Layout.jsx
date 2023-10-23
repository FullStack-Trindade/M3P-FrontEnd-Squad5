import { Outlet } from 'react-router-dom';
import { HeaderComponent } from '../components/HeaderComponent/Header.component';
import * as Styled from './Layout.styles';
import { SidebarComponent } from '../components/SidebarComponent/Sidebar.component'


export const Layout = () => {
    return(
        <Styled.App>
            <Styled.Main>
                <HeaderComponent name="TESTE" title="PAGE" userType="TIPO"/>
                <SidebarComponent children={
                    <Styled.Content>
                        <Outlet/>
                    </Styled.Content>
                }/>
            </Styled.Main>
        </Styled.App>
    );
}