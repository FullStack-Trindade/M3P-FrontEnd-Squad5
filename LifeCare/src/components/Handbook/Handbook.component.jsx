import { useContext } from 'react';
import * as Styled from './Handbook.styles';
import { ModalContext } from '../../contexts/ModalContext/Modal.context';
import { ApiService } from '../../services/Api.service';
import Button from '@mui/material/Button';
import { ModalDataComponent } from '../ModalDataComponent/ModalData.component';



export const HandbookComponent = () => {

    const { showModal, setShowModal, setPatient } = useContext(ModalContext);

    const handleShowModal = (patient) => {
        setPatient(patient)
        setShowModal(true)
    }

    const patients = ApiService.GetUsers();

    return(
        <>
            {patients.map(patient => {
                return(
                    <Styled.PatientInfo key={patient.id}>
                        <Styled.PatientData>{patient.fullName}aderbal ramos da silva</Styled.PatientData>
                        <Button variant="outlined" type="button" onClick={() => handleShowModal(patient)}>Detalhes</Button>
                    </Styled.PatientInfo>
                );
            })}
            {showModal && <ModalDataComponent/>}
        </>
    );
}