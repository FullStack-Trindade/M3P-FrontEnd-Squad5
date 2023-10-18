import * as Styled from './Footer.styles';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa6';

export const FooterComponent = () => {
    return(
        <Styled.Footer>
            <Styled.Socials>
                <Styled.Link><Link to='https://www.instagram.com'><FaInstagram/></Link></Styled.Link>
                <Styled.Link><Link to='https://www.facebook.com'><FaFacebook/></Link></Styled.Link>
                <Styled.Link><Link to='https://web.whatsapp.com'><FaWhatsapp/></Link></Styled.Link>
            </Styled.Socials>
            <p>todos os direitos reservados hkljhjojio &copy; - Nome Empresa 2023</p>
        </Styled.Footer> 
    );
}