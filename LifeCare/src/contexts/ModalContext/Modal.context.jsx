import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext(
    {
        showModal: false,
        setShowModal: () => {},
    }
);

export const ModalProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);

    return(
        <ModalContext.Provider value={{showModal, setShowModal}}>
            {children}
        </ModalContext.Provider>
    )
}

ModalProvider.propTypes = {
    children: PropTypes.node
}