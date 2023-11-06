import { useContext, useEffect } from "react";
import { FormRegisterComponent } from "../../components/Form/FormRegisterExamination/FormRegisterExamination.component";
import * as Styled from "./ExaminationRegistration.styles";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";

export const ExaminationRegistrationPage = () => {
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Pagina de cadastro de Exames");
  }, []);
  return (
    <div>
      <Styled.RegisterExaminationMain>
        <FormRegisterComponent />
      </Styled.RegisterExaminationMain>
    </div>
  );
};
