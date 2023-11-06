import { createContext, useState } from "react";
import PropTypes from "prop-types";

import { jwtDecode } from "jwt-decode";
import {
  getLocalStorage,
  deleteLocalStorage,
  setLocalStorage,
} from "../../services/LocalStorage.service";
import { GetToken } from "../../services/AuthService";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const login = async (data) => {
    const token = await GetToken(data);

    if (token) {
      const jwtDecoded = jwtDecode(token);
      setLocalStorage("user", jwtDecoded);
      setUser({ ...jwtDecoded });
      setIsLogged(true);
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    deleteLocalStorage("token");
    deleteLocalStorage("user");
  };

  const getRole = () => {
    return getLocalStorage("user");
  };

  return (
    <AuthContext.Provider value={{ user, isLogged, login, logout, getRole }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
