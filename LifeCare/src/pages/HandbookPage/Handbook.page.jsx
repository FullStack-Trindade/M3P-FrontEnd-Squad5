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
    <>
      <HandbookComponent />;
    </>
  );
};
