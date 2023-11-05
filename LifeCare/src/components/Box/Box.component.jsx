import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";

import * as Styled from "./Box.styles";
import {
  MdPeople,
  MdNewspaper,
  MdBook,
  MdMedication,
  MdNoMeals,
  MdSportsGymnastics,
} from "react-icons/md";

export const BoxComponent = ({ numPatients }) => {
  const datas = [
    {
      id: 1,
      img: <MdPeople />,
      number: numPatients || <CircularProgress color="success" />,
      name: "Pacientes",
    },
    {
      id: 2,
      img: <MdNewspaper />,
      number: 0,
      name: "Consultas",
    },
    {
      id: 3,
      img: <MdBook />,
      number: 0,
      name: "Exames",
    },
    {
      id: 4,
      img: <MdMedication />,
      number: 0,
      name: "Medicamentos",
    },
    {
      id: 5,
      img: <MdNoMeals />,
      number: 0,
      name: "Dietas",
    },
    {
      id: 6,
      img: <MdSportsGymnastics />,
      number: 0,
      name: "Exercícios",
    },
  ];

  return (
    <Styled.BoxWrapper>
      {datas.map((data, index) => {
        return (
          <Styled.Box key={index}>
            <Styled.Tag>{data.img}</Styled.Tag>
            <Styled.Number>{data.number}</Styled.Number>
            <Styled.ServiceName>{data.name}</Styled.ServiceName>
          </Styled.Box>
        );
      })}
    </Styled.BoxWrapper>
  );
};

BoxComponent.propTypes = {
  numPatients: PropTypes.number,
};
