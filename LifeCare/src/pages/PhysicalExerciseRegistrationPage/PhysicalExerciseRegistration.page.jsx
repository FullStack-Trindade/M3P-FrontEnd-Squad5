import { useContext } from "react";
import { FormRegisterPhysicalExerciseComponent } from "../../components/Form/FormRegisterPhysicalExercise/FormRegisterPhysicalExercise.component";
import * as Styled from "./PhysicalExerciseRegistration.styles";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";

export const PhysicalExerciseRegistrationPage = () => {
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Pagina de cadastro de Exercícios");
  }, []);
  return (
    <div>
      <Styled.PhysicalExerciseMain>
        <FormRegisterPhysicalExerciseComponent />
      </Styled.PhysicalExerciseMain>
    </div>
  );
};
