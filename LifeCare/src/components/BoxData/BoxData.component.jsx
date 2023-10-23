import * as Styled from './BoxData.styles';
import { ApiService } from '../../services/Api.service';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext/Modal.context';
import { ModalDataComponent } from '../../ModalDataComponent/ModalData.component';
import Button from '@mui/material/Button'

export const BoxDataComponent = () => {

    const patients = ApiService.GetUsers();

    const { showModal, setShowModal, setPatient } = useContext(ModalContext)

    const handleShowModal = (patient) => {
        setPatient(patient);
        setShowModal(true);
    }

    return(
        <Styled.ContainerBox>
            {patients.map(patient => {
                return(
                    <Styled.BoxDataWrapper key={patient.id}>
                        <Styled.BoxName>{patient.name}</Styled.BoxName>
                        <Button variant="outlined" type='button' onClick={() => handleShowModal(patient)}>Detalhes</Button>
                    </Styled.BoxDataWrapper>
                );
            })}
            {showModal && <ModalDataComponent/>}
        </Styled.ContainerBox>
    );
}