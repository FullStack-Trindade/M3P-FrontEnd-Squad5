import TextField from "@mui/material/TextField";
import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PropTypes from "prop-types";
import * as Styled from "./Input.style";

export const InputComponent = ({
  label,
  type,
  id,
  placeholder,
  register,
  error,
  mask,
  as,
  onInput,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styled.InputGroup>
      <TextField
        id={id}
        onInput={onInput}
        mask={mask}
        as={as}
        label={label}
        error={error}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        {...register}
      />
      {type === "password" && (
        <Styled.Icon type="button" onClick={handleShowPassword}>
          {!showPassword ? (
            <VisibilityOutlinedIcon />
          ) : (
            <VisibilityOffOutlinedIcon />
          )}
        </Styled.Icon>
      )}
    </Styled.InputGroup>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.any,
  error: PropTypes.any,
};
