import { useContext } from 'react';
import * as Styled from './Handbook.styles';
import { ModalContext } from '../../contexts/ModalContext/Modal.context';
import { ApiService } from '../../services/Api.service';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
                        <Styled.PatientData>{patient.id}</Styled.PatientData>
                        <Styled.PatientData>{patient.fullName}aderbal ramos da silva</Styled.PatientData>
                        <Styled.PatientData>{patient.age}56</Styled.PatientData>
                        <Styled.PatientData>{patient.phoneNumber}99999999</Styled.PatientData>
                        <Styled.PatientData>{patient.healthInsurance}unimed</Styled.PatientData>
                        <Button variant="text" type="button"><Link to='/cadastro/paciente'>Detalhes</Link></Button>
                    </Styled.PatientInfo>
                );
            })}
            {showModal && <ModalDataComponent/>}
        </>
    );
}