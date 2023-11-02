import PropTypes from "prop-types";

import {
  CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
  CardWrapper,
} from "./HomeCard.styles";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";

export const HomeCardComponent = ({
  key,
  fullName,
  healthInsurance,
  birthday,
  phoneNumber,
  email,
  type,
}) => {
  const content = (c) => (!c ? "Não informado" : c);
  const getAge = (birthday) => {
    if (!birthday) {
      return "Não informado";
    }
    const [year, month, day] = birthday.split("T")[0].split("-");
    const today = new Date();
    const userBirthday = new Date(year, month, day);
    let age = today.getFullYear() - userBirthday.getFullYear();
    if (
      today.getMonth() < month ||
      (today.getMonth() === month && today.getDate() < day)
    ) {
      age--;
    }
    return age;
  };
  const formatPhoneNumber = (phone) => {
    const rawNumber = phone.replace(/\D/g, "");

    if (rawNumber.length === 10) {
      return `(${rawNumber.slice(0, 2)}) ${rawNumber[2]} ${rawNumber.slice(
        3,
        7
      )} ${rawNumber.slice(7)}`;
    } else if (rawNumber.length === 11) {
      return `(${rawNumber.slice(0, 2)}) ${rawNumber[2]} ${rawNumber.slice(
        3,
        7
      )} ${rawNumber.slice(7)}`;
    } else {
      return phone;
    }
  };
  return (
    <CardContainer key={key}>
      <CardWrapper>
        <CardHeader>
          <div>{type === "patient" ? <PersonAddIcon /> : <PersonIcon />}</div>
          <div>{fullName}</div>
          <div></div>
        </CardHeader>
        <CardBody>
          <ul>
            <li>Idade: {getAge(birthday)} Anos</li>
            <li>Telefone: {formatPhoneNumber(phoneNumber)}</li>
            <li>E-mail: {content(email)}</li>
            <li>Plano: {content(healthInsurance)}</li>
          </ul>
        </CardBody>
        <CardFooter>
          <button size="small" onClick={() => console.log("ver mais")}>
            Ver mais
          </button>
        </CardFooter>
      </CardWrapper>
    </CardContainer>
  );
};

HomeCardComponent.propTypes = {
  key: PropTypes.number,
  fullName: PropTypes.string.isRequired,
  birthday: PropTypes.string,
  healthInsurance: PropTypes.string,
  type: PropTypes.string,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
