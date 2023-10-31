import { useContext, useEffect } from "react";
import { FormRegisterPatientComponent } from "../../components/Form/FormRegisterPatient/FormRegisterPatient.component";
import * as Styled from "./PatientRegistration.styles";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";

export const PatientRegistrationPage = () => {
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Pagina de cadastro de Paciente");
  }, []);
  return (
    <div>
      <Styled.RegisterPatientMain>
        <FormRegisterPatientComponent />
      </Styled.RegisterPatientMain>
    </div>
  );
};
