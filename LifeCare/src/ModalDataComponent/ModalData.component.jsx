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
                <h2>{patient.fullName}</h2>
                <p>{patient.age}</p>
                <p>{patient.email}</p>
                <p>{patient.healthInsurance}</p>
                <Button variant="outlined" type='button'><Link to='/cadastro/paciente'>Fechar</Link></Button>
            </Styled.Info>
        </Styled.DataWrapper>
    );
}