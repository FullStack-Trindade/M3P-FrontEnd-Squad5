import { useContext, useEffect } from "react";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";
import { FormThemeConfiguration } from "../../components/Form/FormThemeConfiguration/FormThemeConfiguration.component";

export const ThemeConfigPage = () => {
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Pagina de Configuração de Tema");
  }, []);
  return (
    <>
      <FormThemeConfiguration />
    </>
  );
};
