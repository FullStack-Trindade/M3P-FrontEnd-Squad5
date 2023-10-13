import * as Styled from './Button.styles';
import PropTypes from 'prop-types';

export const ButtonComponent = ({type, text, disabled, onClick}) => {
    return(
        <Styled.ButtonWrapper>

            {type === 'submit' && 
                <Styled.Button onClick={onClick} disabled={disabled} type={type}>{text}</Styled.Button>
            }

            {type === 'button' && 
                <Styled.Button onClick={onClick} disabled={disabled}  $outlined={true} type={type}>{text}</Styled.Button>
            }

        </Styled.ButtonWrapper>
    );
}

ButtonComponent.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    $outlined: PropTypes.bool
}