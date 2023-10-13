import * as Styled from './Modal.styles.jsx';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ModalContext } from '../../contexts/ModalContext/Modal.context.jsx';
import { ApiService } from '../../services/Api.service.jsx';

export const ModalComponent = ({isOpen}) => {
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

    const submitForm = () => {
        ApiService.CreateUser(data)
        setTimeout(() => {
            alert('User succesfully registered on database');
            reset();
        }, 2000);
    }

}