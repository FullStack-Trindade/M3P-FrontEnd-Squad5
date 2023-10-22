import { HandbookComponent } from '../../components/Handbook/Handbook.component';
import * as Styled from './Handbook.styles';
import { ModalProvider } from '../../contexts/ModalContext/Modal.context';

export const HandbookPage = () => {


    return(
        <ModalProvider>
            <Styled.HandbookWrapper>
                <Styled.Input type="text" id='search' name='search' placeholder='Pesquise o paciente pelo email'/>
                <HandbookComponent/>
            </Styled.HandbookWrapper>
        </ModalProvider>
    );
}