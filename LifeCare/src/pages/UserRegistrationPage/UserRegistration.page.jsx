import { FormRegisterUser } from "../../components/FormRegisterUser/FormRegisterUser.component";
import { HeaderComponent } from "../../components/HeaderComponent/Header.component";
import * as Styled from "./UserRegistration.styles";

export const UserRegistrationPage = () => {
  return (
    <div>
      <HeaderComponent />
      <Styled.RegisterUsersMain>
        <FormRegisterUser />
      </Styled.RegisterUsersMain>
      ;
    </div>
  );
};
