import { FormRegisterPatientComponent } from "../../components/Form/FormRegisterPatient/FormRegisterPatient.component";
import * as Styled from "./PatientRegistration.styles";

export const PatientRegistrationPage = () => {
  return (
    <div>
      <Styled.RegisterPatientMain>
        <FormRegisterPatientComponent />
      </Styled.RegisterPatientMain>
    </div>
  );
};
