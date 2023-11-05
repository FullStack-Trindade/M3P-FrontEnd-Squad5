import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: {
    cores: {
      primary: "#66CDAA",
      secondary: "#AFEEEE",
    },
    texto: {
      primary: "#4169E1",
      secondary: "#00BFFF",
    },
    nomeEmpresa: "Life Care",
    slogan: "Cuidando da sua saude",
    urlImage: "https://a.imagem.app/oxvyMN.png",
  },
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    cores: {
      primary: "#66CDAA",
      secondary: "#AFEEEE",
    },
    texto: {
      primary: "#00BFFF",
      secondary: "#4169E1",
    },
    nomeEmpresa: "Life Care",
    slogan: "Cuidando da sua saude",
    urlImage: "https://a.imagem.app/oxvyMN.png",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
