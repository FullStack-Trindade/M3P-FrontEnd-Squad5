import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../../contexts/HeaderContext/Header.context";
import { ModalProvider } from "../../contexts/ModalContext/Modal.context";
import { useAxios } from "../../hooks/";

import * as Styles from "./Home.styles";

import { BoxComponent } from "../../components/Box/Box.component";
import { HomeCardComponent } from "../../components/HomeCardComponent/HomeCardComponent";

import CircularProgress from "@mui/material/CircularProgress";

export const HomePage = () => {
  const { setTitle } = useContext(HeaderContext);

  const [filteredPatients, setFilteredPatients] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [patientData, patientIsLoading] = useAxios({
    resource: "/pacientes",
    method: "get",
  });
  const [userData, userIsLoading] = useAxios({
    resource: "/usuarios",
    method: "get",
  });

  useEffect(() => {
    setTitle("Pagina Principal");
    setFilteredPatients(patientData);
    setFilteredUsers(userData);
  }, [patientIsLoading, userIsLoading]);

  const handlerSearchPatient = (e) => {
    const input = e.target.value;

    if (!input) {
      setFilteredPatients(patientData);
    } else {
      const filtered = patientData.data.filter((patient) =>
        patient.email.includes(input)
      );
      setFilteredPatients({ data: filtered });
    }
  };
  const handlerSearchUser = (e) => {
    const input = e.target.value;

    if (!input) {
      setFilteredUsers(userData);
    } else {
      const filtered = userData.data.filter((patient) =>
        patient.email.includes(input)
      );
      setFilteredUsers({ data: filtered });
    }
  };

  const statistics = { numPatients: patientData?.data?.length };

  return (
    <ModalProvider>
      <BoxComponent {...statistics} />
      <Styles.Container>
        <Styles.Columns>
          <h3 style={{ textAlign: "center" }}>Pacientes</h3>
          <Styles.InputContainer>
            <input
              type="text"
              placeholder="Informe o e-mail do paciente"
              onChange={handlerSearchPatient}
            />
          </Styles.InputContainer>
          <Styles.CardContainer>
            {patientIsLoading ? (
              <CircularProgress color="success" />
            ) : (
              filteredPatients?.data?.map((p, i) => {
                return (
                  <HomeCardComponent
                    {...p}
                    key={`${i * p.id}${p.cpf}`}
                    type="patient"
                  />
                );
              })
            )}
          </Styles.CardContainer>
        </Styles.Columns>
        <Styles.Columns>
          <h3 style={{ textAlign: "center" }}>Usuários</h3>
          <Styles.InputContainer>
            <input
              type="text"
              placeholder="Informe o e-mail do usuário"
              onChange={handlerSearchUser}
            />
          </Styles.InputContainer>
          <Styles.CardContainer>
            {userIsLoading ? (
              <CircularProgress color="success" />
            ) : (
              filteredUsers?.data?.map((p, i) => {
                return (
                  <HomeCardComponent
                    {...p}
                    key={`${i * p.id}${p.cpf}`}
                    type="user"
                  />
                );
              })
            )}
          </Styles.CardContainer>
        </Styles.Columns>
      </Styles.Container>
    </ModalProvider>
  );
};
