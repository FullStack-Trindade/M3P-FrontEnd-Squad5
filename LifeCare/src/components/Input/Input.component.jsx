import * as Styled from './Input.styles';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import PropTypes from 'prop-types';



export const InputComponent = ({label, id, type, register}) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return(
    <Styled.InputGroup>
      <TextField
        id={id}
        label={label}
        type={showPassword ? 'text' : type}
        {...register}
        
        />
        {type === 'password' && 
          <Styled.Icon type='button' onClick={handleShowPassword}>
            {!showPassword ? <MdVisibility/> : <MdVisibilityOff/>}
          </Styled.Icon>
        }
    </Styled.InputGroup>
  );
}

InputComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.any,
  error: PropTypes.any
}