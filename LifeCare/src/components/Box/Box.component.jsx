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
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/Theme.context";
import { useEffect, useState } from "react";
import { GetPatient } from "../../services/Patient/Patient.service";
import { GetAppointment } from "../../services/Appointment/Appointment.service";
import { GetExams } from "../../services/Exam/Exam.service";
import { GetMedicines } from "../../services/Medicine/Medicine.service";
import { GetDiets } from "../../services/Diet/Diet.service";
import { GetExercise } from "../../services/Exercise/Exercise.service";

import { useAuth } from "../../hooks";

export const BoxComponent = () => {
  const { user } = useAuth();
  const { role = "admin" } = user;
  const [numPatients, setNumPatients] = useState(null);
  const [numAppointments, setNumAppointments] = useState(null);
  const [numExams, setNumExams] = useState(null);
  const [numMedicines, setNumMedicines] = useState(null);
  const [numDiets, setNumDiets] = useState(null);
  const [numExercises, setNumExercises] = useState(null);

  useEffect(() => {
    (async function updateCardPatients() {
      const patients = await GetPatient();
      setNumPatients(patients.data.length);
    })();
    (async function updateCardAppointments() {
      const appointments = await GetAppointment();
      setNumAppointments(appointments.data.length);
    })();
    (async function updateCardExams() {
      const exams = await GetExams();
      setNumExams(exams.data.length);
    })();
    (async function updateCardMedicines() {
      const medicines = await GetMedicines();
      setNumMedicines(medicines.data.length);
    })();
    (async function updateCardDiets() {
      const diet = await GetDiets();
      setNumDiets(diet.data.length);
    })();
    (async function updateCardExercises() {
      const exercise = await GetExercise();
      setNumExercises(exercise.data.length);
    })();
  }, []);

  const { theme, setTheme } = useContext(ThemeContext);
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
      number: numAppointments || <CircularProgress color="success" />,
      name: "Consultas",
    },
    {
      id: 3,
      img: <MdBook />,
      number: numExams || <CircularProgress color="success" />,
      name: "Exames",
    },
    {
      id: 4,
      img: <MdMedication />,
      number: numMedicines || <CircularProgress color="success" />,
      name: "Medicamentos",
    },
    {
      id: 5,
      img: <MdNoMeals />,
      number: numDiets || <CircularProgress color="success" />,
      name: "Dietas",
    },
    {
      id: 6,
      img: <MdSportsGymnastics />,
      number: numExercises || <CircularProgress color="success" />,
      name: "Exercícios",
    },
  ];

  return (
    <Styled.BoxWrapper>
      {role === "admin" && (
        <Styled.Box $colors={theme.cores}>
          <Styled.Header>
            <Styled.ServiceName>{"Usuários"}</Styled.ServiceName>
            <Styled.Tag>{<MdPeople />}</Styled.Tag>
          </Styled.Header>

          <Styled.Number>{33}</Styled.Number>
        </Styled.Box>
      )}
      {datas.map((data, index) => {
        return (
          <Styled.Box $colors={theme.cores} key={index}>
            <Styled.Header>
              <Styled.ServiceName>{data.name}</Styled.ServiceName>
              <Styled.Tag>{data.img}</Styled.Tag>
            </Styled.Header>
            <Styled.Number>{data.number}</Styled.Number>
          </Styled.Box>
        );
      })}
    </Styled.BoxWrapper>
  );
};

BoxComponent.propTypes = {
  numPatients: PropTypes.number,
};
