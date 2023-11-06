import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import * as Styled from "./Handbook.styles";
import { useEffect, useState } from "react";
import { InputComponent } from "../Input/Input.component";
import { Link } from "react-router-dom";
import { GetPatient } from "../../services/Patient/Patient.service";

export const HandbookComponent = () => {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteFiltrado, setPacienteFiltrado] = useState([]);
  const [filtro, setFiltro] = useState();
  useEffect(() => {
    const getPatient = async () => {
      await GetPatient().then(async (res) => {
        setPacientes(res.data);
        setPacienteFiltrado(res.data);
      });
    };
    getPatient();
  }, []);

  const filtrarPacientes = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setFiltro(value);
  };

  const buscarPaciente = async (e) => {
    e.preventDefault();
    const filter = await pacientes.filter((paciente) =>
      paciente.fullName.includes(filtro)
    );
    setPacienteFiltrado(filter);
  };

  return (
    <section className="recordsContainer">
      <div>
        <form className="search" onSubmit={buscarPaciente}>
          <legend>Utilize a Barra de Pesquisa para buscar</legend>
          <div className="searchPatient">
            <InputComponent
              type="search"
              placeholder="Digite um nome"
              onInput={filtrarPacientes}
            />
            <Button variant="outlined" type="submit">
              <SearchIcon />
            </Button>
          </div>
        </form>
      </div>
      <Styled.Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome do Paciente</th>
            <th>Convênio</th>
            <th>Ver mais</th>
          </tr>
        </thead>
        <tbody>
          {pacienteFiltrado.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.fullName}</td>
              <td>{paciente.healthInsurance}</td>
              <td>
                <Link to={`/prontuario/${paciente.id}`}>
                  <ArrowForwardIosIcon />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </section>
  );
};
