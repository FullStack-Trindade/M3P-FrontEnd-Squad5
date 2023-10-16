import { Outlet } from 'react-router';
import { HeaderComponent } from '../components/HeaderComponent/Header.component';
import { NavbarComponent } from '../components/Navbar/Navbar.component';
import { FooterComponent } from '../components/Footer/Footer.component';
import * as Styled from './Layout.styles';


export const Layout = () => {
    return(
        <Styled.App>
            <Styled.Main>
                <HeaderComponent/>
                <NavbarComponent/>
                <Styled.Content>
                    <Outlet/>
                </Styled.Content>
                <FooterComponent/>
            </Styled.Main>
        </Styled.App>
);
}