import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Get } from "../services/AuthService";

export const PrivateRoutes = ({ children }) => {
  const navigate = useNavigate();

  return Get() ? children : navigate("/login");
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
