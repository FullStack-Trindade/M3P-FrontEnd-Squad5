import { FormRegisterUser } from "../../components/FormRegisterUser/FormRegisterUser.component";
import * as Styled from "./UserRegistration.styles";

export const UserRegistrationPage = () => {
  return (
    <div>
      <Styled.RegisterUsersMain>
        <FormRegisterUser />
      </Styled.RegisterUsersMain>
    </div>
  );
};
