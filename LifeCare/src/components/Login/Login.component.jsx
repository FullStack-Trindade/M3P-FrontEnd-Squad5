import * as Styled from './Login.styles';
import { InputComponent } from '../Input/Input.component';
import { useForm } from 'react-hook-form';
import { ApiService } from '../../services/Api.service';
import { LocalStorageService } from '../../services/LocalStorage.service';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext/Modal.context';

export const FormLoginComponent = () => {

    const { showModal, setShowModal } = useContext(ModalContext);

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    const offLink = () => {
        alert("Sorry, this feature isn't done yet")
    }

    if(!LocalStorageService.get('users')) {
        LocalStorageService.set('users', [
            {
                id: 1,
                email: 'admin@life.com',
                password: '12456789'
            }
        ])
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const submitForm = (data) => {
        const {email, password} = data;

        const user = ApiService.ShowUserByEmail(email)

        if(!user) {
            alert('User not registered yet')
            reset();
            return;
        }

        password === user.password ? redirectToHome(user) : alert('Ops! User or password invalid')
    }

    return(
        <>
            <Styled.Form onSubmit={handleSubmit(submitForm)}>
                <Styled.Header>
                    <Styled.Title>Login</Styled.Title>
                    <Styled.Subtitle>Type here the credentials of yours to acess the system</Styled.Subtitle>
                </Styled.Header>

                <Styled.InputGroup>
                    <InputComponent
                        id='email'
                        label='Email'
                        type='text'
                        register={{...register('email', {
                            required: true,
                            validate: {matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)}
                        })}}
                    />

                    <InputComponent
                        id='password'
                        label='Password'
                        type='password'
                        register={{...register('password', {
                            required: true,
                            minLength: 8
                        })}}
                    />
                </Styled.InputGroup>

                <Styled.Button>Login</Styled.Button>

                <Styled.Action>
                    <Styled.ForgotPass href='#' onClick={offLink}>Forgot password?</Styled.ForgotPass>
                    <Styled.Button type='button' onClick={handleShowModal}>Create account</Styled.Button>
                </Styled.Action>
            </Styled.Form>
        </>
    );
}