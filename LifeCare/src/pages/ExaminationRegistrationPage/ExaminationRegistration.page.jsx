import { FormRegisterComponent } from "../../components/FormRegisterExamination/FormRegisterExamination.component";
import { HeaderComponent } from "../../components/HeaderComponent/Header.component";
import * as Styled from "./ExaminationRegistration.styles";

export const ExaminationRegistrationPage = () => {
  return (
    <div>
      <HeaderComponent />
      <Styled.RegisterExaminationMain>
        <FormRegisterComponent />
      </Styled.RegisterExaminationMain>
    </div>
  );
};
