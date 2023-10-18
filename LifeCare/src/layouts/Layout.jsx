import { Outlet } from 'react-router-dom';
import { HeaderComponent } from '../components/HeaderComponent/Header.component';
import * as Styled from './Layout.styles';


export const Layout = () => {
    return(
        <Styled.App>
            <Styled.Main>
                <HeaderComponent/>
                <Styled.Content>
                    <Outlet/>
                </Styled.Content>
            </Styled.Main>
        </Styled.App>
    );
}