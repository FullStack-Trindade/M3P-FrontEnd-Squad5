import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const HeaderContext = createContext({
  title: "",
  setTitle: () => {},
});

export const HeaderProvider = ({ children }) => {
  const [title, setTitle] = useState("Pagina Teste");

  return (
    <HeaderContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderContext.Provider>
  );
};

HeaderProvider.propTypes = {
  children: PropTypes.node,
};
