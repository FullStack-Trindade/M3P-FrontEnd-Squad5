import PropTypes from "prop-types";
import * as Styled from "./Header.styles";
import { FaUserCircle } from "react-icons/fa";
import Logo from '../../assets/lifecare-logo-01.svg'

export const HeaderComponent = (props) => {
  return (
    <>
      <Styled.HeaderContainer>
        <Styled.Nav>
          <Styled.List>
            <Styled.ItemList><Styled.AppLogo src={Logo}></Styled.AppLogo></Styled.ItemList>
            <Styled.ItemList>{props.title}</Styled.ItemList>
            <Styled.ItemList>
                <Styled.Icon><FaUserCircle /></Styled.Icon>
                <Styled.ItemList>{props.name}</Styled.ItemList>           
            </Styled.ItemList>
            <Styled.ItemList>{props.userType}</Styled.ItemList>
          </Styled.List>
        </Styled.Nav>
      </Styled.HeaderContainer>
    </>
  );
};

// HeaderComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   userType: PropTypes.string.isRequired,
// };
