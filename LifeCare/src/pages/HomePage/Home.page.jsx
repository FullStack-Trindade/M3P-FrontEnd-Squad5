import { BoxComponent } from "../../components/Box/Box.component";
import { BoxDataComponent } from "../../components/BoxData/BoxData.component";
import { ModalProvider } from "../../contexts/ModalContext/Modal.context";
import { InputComponent } from "../../components/Input/Input.component";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";

export const HomePage = () => {
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Pagina Principal");
  }, []);

  return (
    <ModalProvider>
      <BoxComponent />
      <InputComponent label="Pesquisa Pacientes pelo Email" />
      <InputComponent label="Pesquisa de Usuários" />
      <BoxDataComponent />
    </ModalProvider>
  );
};
