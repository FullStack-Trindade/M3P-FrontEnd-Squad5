import { useContext } from 'react';
import * as Styled from './ModalData.styles';
import { ModalContext } from '../../contexts/ModalContext/Modal.context';
import Button from '@mui/material/Button';

export const ModalDataComponent = () => {

    const { setShowModal, patient, setPatient } = useContext(ModalContext);

    const handleShowModal = () => {
        setShowModal(false);
        setPatient(null);
    }

    const titles = [
        {
            id: 1,
            title: 'Consultas'
        },
        {
            id: 2,
            title: 'Exames'
        },
        {
            id: 3,
            title: 'Medicamentos'
        },
        {
            id: 4,
            title: 'Dietas'
        },
        {
            id: 5,
            title: 'Exercícios'
        }
    ]


    return (
        <Styled.DataWrapper>
            <Styled.Info key={patient.id}>
                <h1>Nome do Paciente: {patient.fullName}</h1>
                <h3>Idade: {patient.age}</h3>
                <h3>Contato: {patient.age}</h3>
                <h3>Convênio: {patient.healthInsurance}</h3>
                <h3>Alergias: {patient.listOfAllergies}</h3>
                <h3>Cuidados Especiais: {patient.specificCare}</h3>
                <Styled.RoleTitle>Consultas</Styled.RoleTitle>
                <Styled.Box>
                    <h2>Motivo da Consulta: {patient.appointmentReason}</h2>
                    <h3>Data da Consulta: {patient.appointmentDate}</h3>
                    <p>Descrição: {patient.description}</p>
                    <p>Medicamentos Prescritos: {patient.prescriptionMedication}</p>
                    <p>Precauções de Dosagem: {patient.dosagePrecautions}</p>
                </Styled.Box>
                <Styled.RoleTitle>Exames</Styled.RoleTitle>
                <Styled.Box>
                    <h2>Motivo da Consulta: {patient.appointmentReason}</h2>
                    <h3>Data da Consulta: {patient.appointmentDate}</h3>
                    <p>Descrição: {patient.description}</p>
                    <p>Medicamentos Prescritos: {patient.prescriptionMedication}</p>
                    <p>Precauções de Dosagem: {patient.dosagePrecautions}</p>
                </Styled.Box>
                    <Styled.RoleTitle>Medicamentos</Styled.RoleTitle>
                    <Styled.Box>
                        <h2>Motivo da Consulta: {patient.appointmentReason}</h2>
                        <h3>Data da Consulta: {patient.appointmentDate}</h3>
                        <p>Descrição: {patient.description}</p>
                        <p>Medicamentos Prescritos: {patient.prescriptionMedication}</p>
                        <p>Precauções de Dosagem: {patient.dosagePrecautions}</p>
                    </Styled.Box>
                <Button variant="outlined" type='button' onClick={handleShowModal}>Fechar</Button>
            </Styled.Info>
        </Styled.DataWrapper>
    );
}