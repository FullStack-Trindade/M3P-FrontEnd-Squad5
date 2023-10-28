import { FormRegisterMedicineComponent } from "../../components/Form/FormRegisterMedicine/FormRegisterMedicine.component";
import * as Styled from "./MedicineRegistration.styles";

export const MedicineRegistrationPage = () => {
  return (
    <div>
      <Styled.MedicineMain>
        <FormRegisterMedicineComponent />
      </Styled.MedicineMain>
    </div>
  );
};
