import { useContext } from 'react';
import * as Styled from './ModalData.styles';
import { ModalContext } from '../contexts/ModalContext/Modal.context';
import Button from '@mui/material/Button';

export const ModalDataComponent = () => {

    const { setShowModal, patient, setPatient } = useContext(ModalContext);

    const handleShowModal = () => {
        setShowModal(false);
        setPatient(null);
    }


    return(
        <Styled.DataWrapper>
            <Styled.Info key={patient.id}>
                <h2>{patient.name}</h2>
                <Button variant="outlined" type='button' onClick={handleShowModal}>Fechar</Button>
            </Styled.Info>
        </Styled.DataWrapper>
    );
}