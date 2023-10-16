//import PropTypes from "prop-types";
import * as Styled from "./Header.styles";
import { FaUserCircle } from "react-icons/fa";

export const HeaderComponent = (props) => {
  return (
    <>
      <Styled.HeaderContainer>
        <Styled.Nav>
          <Styled.List>
            <Styled.ItemList>LifeCircle</Styled.ItemList>
            <Styled.ItemList>PAGE TITLE</Styled.ItemList>
            <Styled.ItemList>
                <Styled.Icon><FaUserCircle /></Styled.Icon>
                <Styled.ItemList>USER</Styled.ItemList>           
            </Styled.ItemList>
            <Styled.ItemList>USER TYPE</Styled.ItemList>
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
