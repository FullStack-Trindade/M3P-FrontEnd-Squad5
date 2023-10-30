import * as Styled from './Login.styles';
import { InputComponent } from '../Input/Input.component';
import { useForm } from 'react-hook-form';
import { ApiService } from '../../services/Api.service';
import { LocalStorageService } from '../../services/LocalStorage.service';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext/Modal.context';
// import { ModalComponent } from '../ModalComponent/Modal.component';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth/auth.context';

export const FormLoginComponent = () => {

    const { showModal, setShowModal } = useContext(ModalContext);

    const handleShowModal = () => {
        setShowModal(!showModal);
    }

    const infoAccount = () => {
        alert("Solicite acesso ao administrador!!");
        console.log("Request administrator access");
    }

    const offLink = () => {
        alert("Desculpe, esta funcionalidade não está implementada!");
        console.log("Sorry, this feature isn't done yet");
    }

    if(!LocalStorageService.get('users')) {
        LocalStorageService.set('users', [])
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const navigate = useNavigate();

    const { setAuth } = useContext(AuthContext);

    const submitForm = (data) => {
        const {email, password} = data;

        const user = ApiService.ShowUserByEmail(email)

        if(!user) {
            alert('Usuário não registrado!');
            console.log('User not registered yet');
            reset();
            return;
        }

        password === user.password ? redirectToHome(user) : alert('Usuário ou senha inválida!')
        console.log('User accessed system');
    }

    const redirectToHome = (user) => {
        setAuth({
            user,
            isLogged: true,
        })
        navigate('/')
    }

    return(
        <>
            <Styled.Form onSubmit={handleSubmit(submitForm)}>
                <Styled.Header>
                    <Styled.Title>Login</Styled.Title>
                    <Styled.Subtitle>Preencha os dados para acessar o sistema</Styled.Subtitle>
                </Styled.Header>

                <Styled.InputGroup>
                    <InputComponent
                        id='email'
                        label='Digite seu e-mail'
                        type='email'
                        register={{...register('email', {
                            required: true,
                            validate: {matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)}
                        })}}
                    />

                    <InputComponent
                        id='password'
                        label='Digite sua senha'
                        type='password'
                        register={{...register('password', {
                            required: true,
                            minLength: 8
                        })}}
                    />
                </Styled.InputGroup>

                <Styled.Button>Login</Styled.Button>
                <Styled.Button type='button' onClick={infoAccount}>Criar Conta</Styled.Button>

                <Styled.Action>
                    <Styled.ForgotPass href='#' onClick={offLink}>Esqueceu sua senha?</Styled.ForgotPass>
                    
                </Styled.Action>
            </Styled.Form>
            {showModal && <ModalComponent/>}
        </>
    );
}