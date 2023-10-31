import { useContext, useEffect } from "react";
import { FormRegisterAppointment } from "../../components/Form/FormRegisterAppointment/FormRegisterAppointment.component";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";

export const AppointmentRegistrationPage = () => {
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Pagina de cadastro de Consulta");
  }, []);
  return (
    <div>
      <FormRegisterAppointment />
    </div>
  );
};
