import { FormRegisterComponent } from "../../components/FormRegisterPatient/FormRegisterPatient.component";
import * as Styled from "./PatientRegistration.styles";

export const PatientRegistrationPage = () => {
  return (
    <div>
      <Styled.RegisterPatientMain>
        <FormRegisterComponent />
      </Styled.RegisterPatientMain>
    </div>
  );
};
