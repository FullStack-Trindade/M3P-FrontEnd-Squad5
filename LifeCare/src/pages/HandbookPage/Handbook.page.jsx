import { HandbookComponent } from "../../components/Handbook/Handbook.component";
import * as Styled from "./Handbook.styles";
import { ModalProvider } from "../../contexts/ModalContext/Modal.context";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";

export const HandbookPage = () => {
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Pagina de listagem de Prontuário");
  }, []);

  return (
    <ModalProvider>
      <Styled.HandbookWrapper>
        <Styled.Input
          type="text"
          id="search"
          name="search"
          placeholder="Pesquise o paciente pelo email"
        />
        <HandbookComponent />
      </Styled.HandbookWrapper>
    </ModalProvider>
  );
};
