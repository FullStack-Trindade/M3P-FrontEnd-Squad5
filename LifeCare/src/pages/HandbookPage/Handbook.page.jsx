import { HandbookComponent } from '../../components/Handbook/Handbook.component';
import * as Styled from './Handbook.styles';
import { ModalProvider } from '../../contexts/ModalContext/Modal.context';

export const HandbookPage = () => {

    const roles = [
        {
            id: 1,
            data: 'Registro',
        },
        {
            id: 2,
            data: 'Nome do Paciente',
        },
        {
            id: 3,
            data: 'Detalhes',
        }
    ]

    return(
        <ModalProvider>
            <Styled.HandbookWrapper>
                <Styled.HandbookInfoWrapper>
                    <Styled.Info>
                        {roles.map(role => {
                            return(
                                <Styled.Role>{role.data}</Styled.Role>
                            );
                        })}
                    </Styled.Info>
                    <HandbookComponent/>
                </Styled.HandbookInfoWrapper>
            </Styled.HandbookWrapper>
        </ModalProvider>
    );
}