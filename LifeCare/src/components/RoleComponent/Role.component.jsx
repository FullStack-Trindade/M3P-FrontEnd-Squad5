import * as Styled from './Role.styles';

export const RoleComponent = () => {
    return(
        <Styled.RoleSelector>
            <option value='0' disabled>Select a role</option>
            <option value='1'>Administrator</option>
            <option value='2'>Doctor</option>
            <option value='3'>Nurse</option>
            <option value='4'>Patient</option>
        </Styled.RoleSelector>
    );
}