import PropTypes from "prop-types";
import * as Styled from "./Header.styles";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../../assets/lifecare-logo-01.svg";

export const HeaderComponent = (props) => {
  return (
    <>
      <Styled.HeaderContainer $colors={props.theme.cores}>
        <Styled.Nav>
          <Styled.List>
            <Styled.ItemList $colors={props.theme.texto}>
              <Styled.AppLogo src={props.theme.urlImage}></Styled.AppLogo>
            </Styled.ItemList>
            <Styled.ItemList $colors={props.theme.texto}>
              {props.theme.nomeEmpresa}
            </Styled.ItemList>
            <Styled.ItemList $colors={props.theme.texto}>
              {props.theme.slogan}
            </Styled.ItemList>
            <Styled.ItemList $colors={props.theme.texto}>
              {props.title}
            </Styled.ItemList>
            <Styled.ItemList $colors={props.theme.texto}>
              <Styled.Icon>
                <FaUserCircle />
              </Styled.Icon>
              <Styled.ItemList $colors={props.theme.texto}>
                {props.name}
              </Styled.ItemList>
            </Styled.ItemList>
            <Styled.ItemList $colors={props.theme.texto}>
              {props.userType}
            </Styled.ItemList>
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
