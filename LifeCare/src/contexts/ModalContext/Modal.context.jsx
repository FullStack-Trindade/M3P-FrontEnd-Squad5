import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext(
    {
        showModal: false,
        setShowModal: () => {},
        patient: {},
        setPatient: () => {},
    }
);

export const ModalProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    const [patient, setPatient] = useState();

    return(
        <ModalContext.Provider value={{showModal, setShowModal, patient, setPatient}}>
            {children}
        </ModalContext.Provider>
    )
}

ModalProvider.propTypes = {
    children: PropTypes.node
}