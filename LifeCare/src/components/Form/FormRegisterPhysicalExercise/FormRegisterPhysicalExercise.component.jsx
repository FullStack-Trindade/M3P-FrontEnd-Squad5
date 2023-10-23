import { SelectComponent } from "../../Select/Select.component";
import { InputComponent } from "../../Input/Input.component";

import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import * as Styled from "../Form.styles";

import { useForm } from "react-hook-form";

export const FormRegisterPhysicalExerciseComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

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
    /* await Patient.GetEmail(watch("patientEmail")).then((search) => {
      setValue("patient_id", search.id);
      setValue("patient_name", search.name);
    });*/
  };

  const submitForm = async (data) => {
    const body = {
      ...data,
    };
    console.log(body);
  };

  const submitEdit = async (data) => {
    const body = {
      ...data,
    };
  };
  const submitDelete = async () => {};

  return (
    <>
      <Styled.Form onSubmit={handleSubmit(submitForm)}>
        <Styled.FormTitle>Cadastrar Exercícios</Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormSubTitle>
            Procure o Paciente pelo email
          </Styled.FormSubTitle>
          <Styled.FormRow>
            <InputComponent
              id="patientEmail"
              type="email"
              label="Encontre o paciente pelo email"
              register={{
                ...register("patientEmail", {
                  /*required: "Campo obrigatório",
                  validate: {
                    message: "O email esta errado ou não existe",
                    matchPath: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
                  },*/
                }),
              }}
              error={!!errors.patientEmail}
              helperText={errors.patientEmail?.message}
            />
            <Button variant="outlined" type="button">
              <SearchIcon />
            </Button>
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="patientId"
              type="number"
              label="Id do Paciente"
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
              label="Nome do Paciente"
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
              label="Nome do Exercícios"
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
              label="Quantidade por Semana"
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
              label="Descrição"
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
              onClick={handleSubmit(submitEdit)}
            >
              Editar
            </Button>
            <Button variant="outlined" onClick={handleSubmit(submitDelete)}>
              Deletar
            </Button>
            <Button variant="outlined" type="submit">
              Salvar
            </Button>
          </Styled.ButtonWrapper>
        </Styled.FormColumn>
      </Styled.Form>
    </>
  );
};