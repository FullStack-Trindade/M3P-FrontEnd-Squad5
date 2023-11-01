import { useContext } from 'react';
import * as Styled from './ModalData.styles';
import { ModalContext } from '../../contexts/ModalContext/Modal.context';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const ModalDataComponent = () => {

    const { setShowModal, patient, setPatient } = useContext(ModalContext);

    const handleShowModal = () => {
        setShowModal(false);
        setPatient(null);
    }

    const titles = [
        {
            id: 1,
            title: 'Consultas',
            link: '/cadastro/consulta',
        },
        {
            id: 2,
            title: 'Exames',
            link: '/cadastro/exame',
        },
        {
            id: 3,
            title: 'Medicamentos',
            link: '/cadastro/medicamento'
        },
        {
            id: 4,
            title: 'Dietas',
            link: '/cadastro/dieta',
        },
        {
            id: 5,
            title: 'Exercícios',
            link: '/cadastro/exercicio'
        }
    ]


    return (
        <Styled.DataWrapper>
            <Styled.Info key={patient.id}>
                <Styled.PatientInfo>
                    <h1>Nome do Paciente: {patient.fullName}</h1>
                    <h3>Idade: {patient.age}</h3>
                    <h3>Contato: {patient.age}</h3>
                    <h3>Convênio: {patient.healthInsurance}</h3>
                    <h3>Alergias: {patient.listOfAllergies}</h3>
                    <h3>Cuidados Especiais: {patient.specificCare}</h3>
                </Styled.PatientInfo>
                <Styled.Wrapper>
                    <Styled.Box>
                        <Styled.BoxDataWrapper>
                            <Styled.RoleTitle>Consultas</Styled.RoleTitle>
                            <h2>Motivo da Consulta: {patient.appointmentReason}</h2>
                            <h3>Data da Consulta: {patient.appointmentDate}</h3>
                            <p>Descrição: {patient.description}</p>
                            <p>Medicamentos Prescritos: {patient.prescriptionMedication}</p>
                            <p>Precauções de Dosagem: {patient.dosagePrecautions}</p>
                            <button><Link to={titles[0].link}>Atualizar dados cadastrais</Link></button>
                        </Styled.BoxDataWrapper>
                    </Styled.Box>
                    <Styled.Box>
                        <Styled.RoleTitle>Exames</Styled.RoleTitle>
                        <h2>Nome do Exame: {patient.appointmentReason}</h2>
                        <h3>Laboratório: {patient.appointmentDate}</h3>
                        <h3>Data do Exame: {patient.description}</h3>
                        <h3>Anexo: <input type="file" name="anexo" id="anexo" /></h3>
                        <button><Link to={titles[1].link}>Atualizar dados cadastrais</Link></button>
                    </Styled.Box>
                    <Styled.Box>
                        <Styled.RoleTitle>Medicamentos</Styled.RoleTitle>
                        <h2>Nome do Medicamento: {patient.appointmentReason}</h2>
                        <h3>Quantidade Prescrita: {patient.appointmentDate}</h3>
                        <h3>Validade: {patient.description}</h3>
                        <button><Link to={titles[2].link}>Atualizar dados cadastrais</Link></button>
                    </Styled.Box>
                    <Styled.Box>
                        <Styled.RoleTitle>Dietas</Styled.RoleTitle>
                        <h2>Nome da Dieta: {patient.appointmentReason}</h2>
                        <h3>Tipo de Dieta: {patient.appointmentDate}</h3>
                        <button><Link to={titles[3].link}>Atualizar dados cadastrais</Link></button>
                    </Styled.Box>
                    <Styled.Box>
                        <Styled.RoleTitle>Exercícios</Styled.RoleTitle>
                        <h2>Nome do Exercício: {patient.appointmentReason}</h2>
                        <h3>Tipo de Exercício: {patient.appointmentDate}</h3>
                        <button><Link to={titles[4].link}>Atualizar dados cadastrais</Link></button>
                    </Styled.Box>
                </Styled.Wrapper>
                <Button variant="outlined" type='button' onClick={handleShowModal}>Fechar</Button>
            </Styled.Info>
        </Styled.DataWrapper>
    );
}