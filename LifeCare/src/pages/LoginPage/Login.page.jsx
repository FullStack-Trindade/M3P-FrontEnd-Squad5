import * as Styled from './Login.styles';
import { FormLoginComponent } from '../../components/Login/Login.component';

export const LoginPage = () => {
    return(
        <Styled.Login>
            <FormLoginComponent/>
        </Styled.Login>
    );
}