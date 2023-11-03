import { InputComponent } from "../../Input/Input.component";

import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as Styled from "../Form.styles";
import { GetEmail, GetID } from "../../../services/Patient/Patient.service";
import {
  DeleteExam,
  UpdateExam,
  GetExamID,
  StoreExam,
} from "../../../services/Exam/Exam.service";

export const FormRegisterComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const [disable, setDisable] = useState(true);
  const [saveDisable, setSaveDisable] = useState(false);

  useEffect(() => {
    if (id) {
      const getExam = async () => {
        await GetExamID(id).then(async (res) => {
          console.log(res);
          setValue("name", res.data.name);
          setValue("examDate", res.data.examDate);
          setValue("examTime", res.data.examTime);
          setValue("examType", res.data.examType);
          setValue("laboratory", res.data.laboratory);
          setValue("documentURL", res.data.documentURL);
          setValue("results", res.data.results);
          setValue("description", res.data.description);
          setValue("patientId", res.data.patientId);
          await GetID(res.data.patientId).then(async (patient) => {
            console.log(patient);
            setValue("patientName", patient.fullName);
            setValue("patientEmail", patient.email);
          });
        });
      };
      getExam();
      setDisable(false);
      setSaveDisable(true);
    }
  }, []);

  const handleSearchPatient = async () => {
    await GetEmail(watch("patientEmail")).then(async (search) => {
      setValue("patientId", search.data[0].id);
      setValue("patientName", search.data[0].fullName);
    });
  };

  const submitForm = async (data) => {
    const body = {
      ...data,
      userId: 1,
    };
    await StoreExam(body);
  };

  const submitEdit = async (data) => {
    const body = {
      ...data,
    };
    await UpdateExam(id, body);
  };
  const submitDelete = async () => {
    await DeleteExam(id);
  };

  return (
    <>
      <Styled.Form onSubmit={handleSubmit(submitForm)}>
        <Styled.FormTitle>Cadastrar Exame</Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormSubTitle>
            Procure o Paciente pelo email
          </Styled.FormSubTitle>
          <Styled.FormRow>
            <InputComponent
              id="patientEmail"
              type="email"
              placeholder="Encontre o paciente pelo email"
              register={{
                ...register("patientEmail", {
                  required: "Campo obrigatório",
                  validate: {
                    matchPath: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
                  },
                }),
              }}
              error={!!errors.patientEmail}
              helperText={errors.patientEmail?.message}
            />
            <Button
              variant="outlined"
              onClick={handleSearchPatient}
              type="button"
            >
              <SearchIcon />
            </Button>
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="patientId"
              type="number"
              placeholder="Id do Paciente"
              register={{
                ...register("patientId", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.patientId}
              helperText={errors.patientId?.message}
            />
            <InputComponent
              id="patientName"
              type="text"
              placeholder="Nome do Paciente"
              register={{
                ...register("patientName", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 6,
                    message: "Campo deve ter pelo menos 6 caracteres",
                  },
                  maxLength: {
                    value: 64,
                    message: "Campo deve ter no máximo 64 caracteres",
                  },
                }),
              }}
              error={!!errors.patientName}
              helperText={errors.patientName?.message}
            />
          </Styled.FormRow>
          <Styled.FormSubTitle>
            Preencha os campos para cadastrar
          </Styled.FormSubTitle>
          <Styled.FormRow>
            <InputComponent
              id="name"
              type="text"
              placeholder="Digite o nome do exame"
              label="Nome do Exame"
              register={{
                ...register("name", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 8,
                    message: "Campo deve ter pelo menos 8 caracteres",
                  },
                  maxLength: {
                    value: 64,
                    message: "Campo deve ter no máximo 64 caracteres",
                  },
                }),
              }}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="examDate"
              type="date"
              register={{
                ...register("examDate", { required: "Campo obrigatório" }),
              }}
              error={!!errors.examDate}
              helperText={errors.examDate?.message}
            />
            <InputComponent
              id="examTime"
              type="time"
              register={{
                ...register("examTime", { required: "Campo obrigatório" }),
              }}
              error={!!errors.examTime}
              helperText={errors.examTime?.message}
            />

            <InputComponent
              id="documentURL"
              type="url"
              label="URL do documento"
              placeholder="Digite a URL do documento"
              register={{
                ...register("documentURL"),
              }}
              error={!!errors.documentURL}
              helperText={errors.documentURL?.message}
            />
          </Styled.FormRow>

          <Styled.FormRow>
            <InputComponent
              id="examType"
              type="text"
              label="Tipo de Exame"
              placeholder="Digite o tipo do exame"
              register={{
                ...register("examType", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 4,
                    message: "Campo deve ter pelo menos 4 caracteres",
                  },
                  maxLength: {
                    value: 32,
                    message: "Campo deve ter no máximo 32 caracteres",
                  },
                }),
              }}
              error={!!errors.examType}
              helperText={errors.examType?.message}
            />
            <InputComponent
              id="laboratory"
              type="text"
              label="Laboratório"
              placeholder="Digite o laboratório do exame"
              register={{
                ...register("laboratory", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 4,
                    message: "Campo deve ter pelo menos 4 caracteres",
                  },
                  maxLength: {
                    value: 32,
                    message: "Campo deve ter no máximo 32 caracteres",
                  },
                }),
              }}
              error={!!errors.laboratory}
              helperText={errors.laboratory?.message}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="results"
              type="textarea"
              label="Resultados"
              register={{
                ...register("results", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 16,
                    message: "Campo deve ter pelo menos 16 caracteres",
                  },
                  maxLength: {
                    value: 1024,
                    message: "Campo deve ter no máximo 1024 caracteres",
                  },
                }),
              }}
              error={!!errors.results}
              helperText={errors.results?.message}
            />
          </Styled.FormRow>
          <Styled.ButtonWrapper>
            <Button
              variant="outlined"
              type="button"
              disabled={disable}
              onClick={handleSubmit(submitEdit)}
            >
              Editar
            </Button>
            <Button
              variant="outlined"
              disabled={disable}
              type="button"
              onClick={handleSubmit(submitDelete)}
            >
              Deletar
            </Button>
            <Button variant="outlined" disabled={saveDisable} type="submit">
              Salvar
            </Button>
          </Styled.ButtonWrapper>
        </Styled.FormColumn>
      </Styled.Form>
    </>
  );
};
