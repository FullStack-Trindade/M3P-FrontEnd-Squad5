import { FormRegisterDiet } from "../../components/FormRegisterDiet/FormRegisterDiet.component";
import { HeaderComponent } from "../../components/HeaderComponent/Header.component";
import * as Styled from "./DietRegistration.styles";

export const DietRegistrationPage = () => {
  return (
    <div>
      <HeaderComponent />
      <Styled.RegisterDietMain>
        <FormRegisterDiet />
      </Styled.RegisterDietMain>
    </div>
  );
};
