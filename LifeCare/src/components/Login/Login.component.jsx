import * as Styled from './Login.styles';
import { InputComponent } from '../Input/Input.component';

export const FormLoginComponent = () => {
    return(
        <>
            <Styled.Form>
                <Styled.Header>
                    <Styled.Title>Login</Styled.Title>
                    <Styled.Subtitle>Type here the credentials of yours to acess the system</Styled.Subtitle>
                    <InputComponent/>
                </Styled.Header>

                <Styled.Button>Login</Styled.Button>

                <Styled.Action>
                    <Styled.ForgotPass href='#'>Forgot Password?</Styled.ForgotPass>
                </Styled.Action>
            </Styled.Form>
        </>
    );
}