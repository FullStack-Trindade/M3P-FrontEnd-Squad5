import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: {
    cores: {
      primary: "#847979",
      secondary: "#BBC2E2",
    },
    texto: {
      primary: "#847979",
      secondary: "#BBC2E2",
    },
    nomeEmpresa: "Minha Empresa",
    slogan: "Alterar para o slogan da sua empresa",
    urlImage: "https://a.imagem.app/oxvyMN.png",
  },
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    cores: {
      primary: "#847979",
      secondary: "#BBC2E2",
    },
    texto: {
      primary: "#ffff",
      secondary: "#000",
    },
    nomeEmpresa: "Garcia Care",
    slogan: "Antendimento Gracioso",
    logo: "https://a.imagem.app/oxvyMN.png",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
