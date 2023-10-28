
import TextField from "@mui/material/TextField";
import { useState } from "react";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PropTypes from "prop-types";
import * as Styled from "./Input.style";

export const InputComponent = ({
  label,
  type,
  id,
  placeholder,
  register,
  error,
  onInput,
  helperText,
  readOnly = false
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
        label={label}
        error={error}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        helperText={helperText}
        {...register}
        inputProps={
					{ readOnly: readOnly, }
				}
      >
        {/* {type === "password" && (
          <Styled.Icon type="button" onClick={handleShowPassword}>
            {!showPassword ? (
              <VisibilityOutlinedIcon />
            ) : (
              <VisibilityOffOutlinedIcon />
            )}
          </Styled.Icon>
        )} */}
      </TextField>
    </Styled.InputGroup>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.any,
  error: PropTypes.any,
  helperText: PropTypes.any,
  readOnly: PropTypes.bool
};
