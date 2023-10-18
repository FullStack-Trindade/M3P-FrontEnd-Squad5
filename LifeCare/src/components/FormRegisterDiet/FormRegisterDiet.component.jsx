import { InputComponent } from "../Input/Input.component";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";
import * as Styled from "./FormRegisterDiet.styles";

export const FormRegisterDiet = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    const body = {
      ...data,
    };
    console.log(body);
  };

  const submitEdit = async (data) => {
    true;
    const body = {
      ...data,
    };
  };
  const submitDelete = async () => {};

  return (
    <>
      <Styled.Form onSubmit={handleSubmit(submitForm)}>
        <Styled.FormTitle>Cadastrar Exame</Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormLegend>
            Preencha os campos para cadastrar
          </Styled.FormLegend>
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
              type="text"
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
