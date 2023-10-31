import { useContext, useEffect } from "react";
import { FormRegisterDiet } from "../../components/Form/FormRegisterDiet/FormRegisterDiet.component";
import * as Styled from "./DietRegistration.styles";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";

export const DietRegistrationPage = () => {
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Pagina de cadastro de Dieta");
  }, []);
  return (
    <div>
      <Styled.RegisterDietMain>
        <FormRegisterDiet />
      </Styled.RegisterDietMain>
    </div>
  );
};
