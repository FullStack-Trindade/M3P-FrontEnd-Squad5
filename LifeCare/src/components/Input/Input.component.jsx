import * as Styled from './Input.styles';
import TextField from '@mui/material/TextField'


export const InputComponent = () => {
    return(
      <Styled.InputGroup>
        <TextField
          id="email"
          label="Email"
          
        />
        <TextField
          id="password"
          label="Password"
          
        />
      </Styled.InputGroup>
    );
}