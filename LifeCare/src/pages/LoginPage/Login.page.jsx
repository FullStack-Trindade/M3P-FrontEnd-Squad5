import * as Styled from './Login.styles';
import { FormLoginComponent } from '../../components/Login/Login.component';
import { ModalProvider } from '../../contexts/ModalContext/Modal.context';

export const LoginPage = () => {
    return(
       <ModalProvider>
            <Styled.Login>
                <FormLoginComponent/>
            </Styled.Login>
       </ModalProvider>
    );
}