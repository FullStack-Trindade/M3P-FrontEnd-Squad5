import { FormRegisterComponent } from "../../components/FormRegisterPatient/FormRegisterPatient.component";
import { HeaderComponent } from "../../components/HeaderComponent/Header.component";
import * as Styled from "./PatientRegistration.styles";

export const PatientRegistrationPage = () => {
  return (
    <div>
      <HeaderComponent />
      <Styled.RegisterPatientMain>
        <FormRegisterComponent />
      </Styled.RegisterPatientMain>
    </div>
  );
};
