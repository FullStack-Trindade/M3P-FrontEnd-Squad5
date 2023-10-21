import { FormRegisterPhysicalExerciseComponent } from "../../components/Form/FormRegisterPhysicalExercise/FormRegisterPhysicalExercise.component";
import * as Styled from "./PhysicalExerciseRegistration.styles";

export const PhysicalExerciseRegistrationPage = () => {
  return (
    <div>
      <Styled.PhysicalExerciseMain>
        <FormRegisterPhysicalExerciseComponent />
      </Styled.PhysicalExerciseMain>
    </div>
  );
};
