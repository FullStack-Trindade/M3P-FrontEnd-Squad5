import { SelectComponent } from "../Select/Select.component";
import { InputComponent } from "../Input/Input.component";

import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import * as Styled from "./FormRegisterDiet.styles";
import { useForm } from "react-hook-form";

export const FormRegisterDiet = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const selectDiet = [
    { value: "", label: "Selecione" },
    { value: "low carb", label: "Low Carb" },
    { value: "dash", label: "Dash" },
    { value: "paleolithic", label: "Paleolítica" },
    { value: "ketogenic", label: "Cetogênica" },
    { value: "dukan", label: "Dukan" },
    { value: "mediterranean", label: "Mediterrânea" },
    { value: "nurse", label: "Outra" },
  ];

  const handleSearchPatient = async () => {
    /* await Patient.GetID(watch("patientID")).then((search) => {
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
    true;
    const body = {
      ...data,
    };
  };
  const submitDelete = async () => {};

  return (
    <>
      <Styled.Form onSubmit={handleSubmit(submitForm)}>
        <Styled.FormTitle>Cadastrar Dieta</Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormLegend>Procure o Paciente pelo email </Styled.FormLegend>
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
            <Styled.FormColumn>
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
            </Styled.FormColumn>
            <Styled.FormColumn>
              <InputComponent
                id="dietDate"
                type="date"
                register={{
                  ...register("dietDate", { required: "Campo obrigatório" }),
                }}
                error={!!errors.dietDate}
                helperText={errors.dietDate?.message}
              />
              <InputComponent
                id="dietName"
                type="text"
                label="Nome da Dieta"
                register={{
                  ...register("dietName", {
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
                error={!!errors.dietName}
                helperText={errors.dietName?.message}
              />
            </Styled.FormColumn>
            <Styled.FormColumn>
              <InputComponent
                id="dietTime"
                type="time"
                register={{
                  ...register("dietTime", { required: "Campo obrigatório" }),
                }}
                error={!!errors.dietTime}
                helperText={errors.dietTime?.message}
              />

              <SelectComponent
                id={"dietType"}
                label={"Tipos de Dieta"}
                error={!!errors.gender}
                helperText={errors.gender?.message}
                option={selectDiet}
                register={{
                  ...register("gender", {
                    required: "Selecione uma das opções",
                  }),
                }}
              />
            </Styled.FormColumn>
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
