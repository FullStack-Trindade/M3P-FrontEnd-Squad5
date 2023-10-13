import * as Styled from './Modal.styles.jsx';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ModalContext } from '../../contexts/ModalContext/Modal.context.jsx';
import { ApiService } from '../../services/Api.service.jsx';
import { InputComponent } from '../Input/Input.component.jsx';
import { RoleComponent } from '../RoleComponent/Role.component.jsx';

export const ModalComponent = () => {
    const { showModal, setShowModal } = useContext(ModalContext);

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const submitForm = (data) => {
        ApiService.CreateUser(data)
        setTimeout(() => {
            alert('User succesfully registered on database');
            reset();
        }, 2000);
    }

    return(
        <Styled.Form onSubmit={handleSubmit(submitForm)}>
            <Styled.Header>
                <Styled.Title>Create your account here</Styled.Title>
                <Styled.SubTitle>Fill the inputs to create an account to acess the system</Styled.SubTitle>
            </Styled.Header>
            <RoleComponent/>
            

            <Styled.InputGroup>
                <InputComponent
                    id='name'
                    label='Name'
                    type='text'
                    register={{...register('name', {
                        required: true,
                    })}}
                />

                <InputComponent
                    id='email'
                    label='Email'
                    type='email'
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

                <InputComponent
                    id='repeat_password'
                    label='Repeat Password'
                    type='password'
                    register={{...register('repeat_password', {
                        required: true,
                        minLength: 8
                    })}}
                />
            </Styled.InputGroup>

            <Styled.Action>
               <Styled.Button type='button' onClick={handleShowModal}>Close Modal</Styled.Button>
               <Styled.Button type='submit'>Create your account</Styled.Button>  
            </Styled.Action>
        </Styled.Form>
    );

}