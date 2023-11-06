import { useContext, useEffect, useState } from "react";
import { FormRegisterPatientComponent } from "../../components/Form/FormRegisterPatient/FormRegisterPatient.component";
import * as Styled from "./PatientRegistration.styles";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";

import {
  getLocalStorage,
  deleteLocalStorage,
} from "../../services/LocalStorage.service";

export const PatientRegistrationPage = () => {
  const { setTitle } = useContext(HeaderContext);

  const [patientId, setPatientId] = useState(0);

  useEffect(() => {
    setTitle("Pagina de cadastro de Paciente");
    const hasPatient = getLocalStorage("patient");
    console.log("has:", hasPatient);
    if (hasPatient && hasPatient.fromHome == true) {
      setPatientId(hasPatient.id);
    }
    // deleteLocalStorage("patient");
  }, []);
  return (
    <div>
      <Styled.RegisterPatientMain>
        <FormRegisterPatientComponent id={patientId} />
      </Styled.RegisterPatientMain>
    </div>
  );
};
