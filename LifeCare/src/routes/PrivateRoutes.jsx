import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { Get } from "../services/AuthService";

export const PrivateRoutes = ({ children }) => {
  return Get() ? children : <Navigate to="/login" />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
