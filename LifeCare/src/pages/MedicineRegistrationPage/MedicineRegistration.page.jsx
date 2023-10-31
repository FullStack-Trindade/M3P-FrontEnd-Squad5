import { useContext, useEffect } from "react";
import { FormRegisterMedicineComponent } from "../../components/Form/FormRegisterMedicine/FormRegisterMedicine.component";
import * as Styled from "./MedicineRegistration.styles";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";

export const MedicineRegistrationPage = () => {
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Pagina de cadastro de Medicamento");
  }, []);
  return (
    <div>
      <Styled.MedicineMain>
        <FormRegisterMedicineComponent />
      </Styled.MedicineMain>
    </div>
  );
};
