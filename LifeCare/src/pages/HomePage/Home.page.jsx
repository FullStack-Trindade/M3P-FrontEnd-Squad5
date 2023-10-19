import { BoxComponent } from '../../components/Box/Box.component';
import { BoxDataComponent } from '../../components/BoxData/BoxData.component';
import { ModalProvider } from '../../contexts/ModalContext/Modal.context';

export const HomePage = () => {
    return (
        <ModalProvider>
            <BoxComponent />
            <BoxDataComponent />
        </ModalProvider>
    );
}