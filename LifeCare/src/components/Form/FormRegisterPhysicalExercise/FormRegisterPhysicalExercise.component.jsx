import { SelectComponent } from "../../Select/Select.component";
import { InputComponent } from "../../Input/Input.component";

import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import * as Styled from "../Form.styles";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  DeleteExercise,
  GetExerciseID,
  StoreExercise,
  UpdateExercise,
} from "../../../services/Exercise/Exercise.service";
import { GetEmail, GetID } from "../../../services/Patient/Patient.service";
import { ThemeContext } from "../../../contexts/ThemeContext/Theme.context";

export const FormRegisterPhysicalExerciseComponent = () => {
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
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (id) {
      const getExercise = async () => {
        await GetExerciseID(id).then(async (res) => {
          console.log(res);
          setValue("exerciseName", res.data.exerciseName);
          setValue("date", res.data.date);
          setValue("time", res.data.time);
          setValue("exerciseType", res.data.exerciseType);
          setValue("quantityPerWeek", res.data.quantityPerWeek);
          setValue("description", res.data.description);
          setValue("patientId", res.data.patientId);
          await GetID(res.data.patientId).then(async (patient) => {
            setValue("patientName", patient.fullName);
            setValue("patientEmail", patient.email);
          });
        });
      };
      getExercise();
      setDisable(false);
      setSaveDisable(true);
    }
  }, []);

  const selectExercise = [
    { value: "", label: "Selecione" },
    { value: "aerobic endurance", label: "Resistência Aeróbica" },
    { value: "muscular endurance", label: "Resistência Muscular" },
    { value: "flexibility", label: "Flexibilidade" },
    { value: "strength", label: "Força" },
    { value: "agility", label: "Agilidade" },
    { value: "other", label: "Outra" },
  ];

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
    await StoreExercise(body);
  };

  const submitEdit = async (data) => {
    const body = {
      ...data,
      userId: 1,
    };
    await UpdateExercise(id, body);
  };
  const submitDelete = async () => {
    await DeleteExercise(id);
  };

  return (
    <>
      <Styled.Form $colors={theme.cores} onSubmit={handleSubmit(submitForm)}>
        <Styled.FormTitle $colors={theme.texto}>
          Cadastrar Exercício
        </Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormSubTitle $colors={theme.texto}>
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
            <InputComponent
              id="exerciseName"
              type="text"
              placeholder="Digite o nome do exame"
              register={{
                ...register("exerciseName", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 5,
                    message: "Campo deve ter pelo menos 5 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message: "Campo deve ter no máximo 100 caracteres",
                  },
                }),
              }}
              error={!!errors.exerciseName}
              helperText={errors.exerciseName?.message}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="date"
              type="date"
              register={{
                ...register("date", { required: "Campo obrigatório" }),
              }}
              error={!!errors.date}
              helperText={errors.date?.message}
            />
            <InputComponent
              id="time"
              type="time"
              register={{
                ...register("time", { required: "Campo obrigatório" }),
              }}
              error={!!errors.time}
              helperText={errors.time?.message}
            />

            <SelectComponent
              id={"exerciseType"}
              label={"Tipos de Exercicio"}
              error={!!errors.exerciseType}
              helperText={errors.exerciseType?.message}
              option={selectExercise}
              register={{
                ...register("exerciseType", {
                  required: "Selecione uma das opções",
                }),
              }}
            />
          </Styled.FormRow>

          <Styled.FormRow>
            <InputComponent
              id="quantityPerWeek"
              type="number"
              placeholder="Quantidade por Semana"
              step="0.01"
              register={{
                ...register("quantityPerWeek", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.quantityPerWeek}
              helperText={errors.quantityPerWeek?.message}
            />
            <InputComponent
              id="description"
              type="text"
              placeholder="Descrição do exercicio"
              register={{
                ...register("description", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 10,
                    message: "Campo deve ter pelo menos 10 caracteres",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Campo deve ter no máximo 1000 caracteres",
                  },
                }),
              }}
              error={!!errors.description}
              helperText={errors.description?.message}
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
