import { FormRegisterComponent } from "../../components/FormRegisterPatient/FormRegisterPatient.component";
import * as Styled from "./RegisterPatient.styles";

export const RegisterPatientPage = () => {
  return (
    <div>
      <Styled.RegisterPatientMain>
        <FormRegisterComponent />
      </Styled.RegisterPatientMain>
    </div>
  );
};
