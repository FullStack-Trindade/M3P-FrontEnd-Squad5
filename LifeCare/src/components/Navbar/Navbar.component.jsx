import * as Styled from './Navbar.styles';
import { Link } from 'react-router-dom';

export const NavbarComponent = () => {
    return(
        <Styled.Navbar>
            <Styled.Services>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Logout</Link></li>
                <li><Link to='/cadastro/paciente'>Cadastro de Paciente</Link></li>
            </Styled.Services>
        </Styled.Navbar>
    );
}