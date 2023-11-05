import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { axiosInstance } from "../../helper/axiosInstance";
import { jwtDecode } from "jwt-decode";
import { deleteLocalStorage } from "../../services/LocalStorage.service";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const login = async (data) => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const token = await axiosInstance
      .post(`${apiUrl}/usuarios/login`, data)
      .then((response) => {
        if (response.data.status == 401) {
          return null;
        } else {
          return response.data.access_token;
        }
      })
      .catch((e) => console.log("token_fail :", e.message));

    if (token) {
      const GetToken = () => {
        return localStorage.getItem("token");
      };

      const SetToken = (token) => {
        localStorage.setItem("token", token);
        return GetToken() === token;
      };

      const jwtDecoded = jwtDecode(token);
      setUser({ ...jwtDecoded });
      setIsLogged(true);
      return SetToken(token);
    }

    return false;
  };

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    deleteLocalStorage("token");
  };

  return (
    <AuthContext.Provider value={{ user, isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
