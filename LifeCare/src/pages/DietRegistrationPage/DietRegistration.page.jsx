import { FormRegisterDiet } from "../../components/FormRegisterDiet/FormRegisterDiet.component";
import * as Styled from "./DietRegistration.styles";

export const DietRegistrationPage = () => {
  return (
    <div>
      <Styled.RegisterDietMain>
        <FormRegisterDiet />
      </Styled.RegisterDietMain>
    </div>
  );
};