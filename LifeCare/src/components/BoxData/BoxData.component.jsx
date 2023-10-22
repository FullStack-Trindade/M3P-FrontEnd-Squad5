import * as Styled from './BoxData.styles';
import { ApiService } from '../../services/Api.service';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext/Modal.context';
import { ModalDataComponent } from '../ModalDataComponent/ModalData.component';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
                        <Styled.BoxName>Nome: {patient.fullName}jóse gomes da silva</Styled.BoxName>
                        <Styled.BoxAge>Idade: {patient.age}21</Styled.BoxAge>
                        <Styled.BoxPhone>Contato: {patient.phoneNumber}555555</Styled.BoxPhone>
                        <Styled.BoxCovenant>Convênio: {patient.healthInsurance}geap</Styled.BoxCovenant>
                        <Button variant="outlined" type='button'><Link to='/cadastro/paciente'>Detalhes</Link></Button>
                    </Styled.BoxDataWrapper>
                );
            })}
            {showModal && <ModalDataComponent/>}
        </Styled.ContainerBox>
    );
}