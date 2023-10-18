import { FormRegisterComponent } from "../../components/FormRegisterExamination/FormRegisterExamination.component";
import * as Styled from "./ExaminationRegistration.styles";

export const ExaminationRegistrationPage = () => {
  return (
    <div>
      <Styled.RegisterExaminationMain>
        <FormRegisterComponent />
      </Styled.RegisterExaminationMain>
    </div>
  );
};
