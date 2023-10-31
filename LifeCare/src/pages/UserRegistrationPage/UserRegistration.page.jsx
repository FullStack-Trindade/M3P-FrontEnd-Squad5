import { useContext, useEffect } from "react";
import { FormRegisterUser } from "../../components/Form/FormRegisterUser/FormRegisterUser.component";
import * as Styled from "./UserRegistration.styles";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";

export const UserRegistrationPage = () => {
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Pagina de cadastro de Usuários");
  }, []);
  return (
    <div>
      <Styled.RegisterUsersMain>
        <FormRegisterUser />
      </Styled.RegisterUsersMain>
    </div>
  );
};
