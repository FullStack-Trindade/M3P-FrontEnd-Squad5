import { FormRegisterUser } from "../../components/Form/FormRegisterUser/FormRegisterUser.component";
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
