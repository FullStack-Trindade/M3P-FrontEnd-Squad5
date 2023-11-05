import { SelectComponent } from "../../Select/Select.component";
import { InputComponent } from "../../Input/Input.component";

import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import * as Styled from "../Form.styles";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GetEmail, GetID } from "../../../services/Patient/Patient.service";
import {
  DeleteDiet,
  GetDietID,
  StoreDiet,
  UpdateDiet,
} from "../../../services/Diet/Diet.service";
import { ThemeContext } from "../../../contexts/ThemeContext/Theme.context";

export const FormRegisterDiet = () => {
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
      const getDiet = async () => {
        await GetDietID(id).then(async (res) => {
          console.log(res);
          setValue("name", res.data.name);
          setValue("date", res.data.date);
          setValue("time", res.data.time);
          setValue("dietType", res.data.dietType);
          setValue("description", res.data.description);
          setValue("patientId", res.data.patientId);
          await GetID(res.data.patientId).then(async (patient) => {
            setValue("patientName", patient.fullName);
            setValue("patientEmail", patient.email);
          });
        });
      };
      getDiet();
      setDisable(false);
      setSaveDisable(true);
    }
  }, []);

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
    await StoreDiet(body);
  };

  const submitEdit = async (data) => {
    const body = {
      ...data,
      userId: 1,
    };
    await UpdateDiet(id, body);
  };
  const submitDelete = async () => {
    await DeleteDiet(id);
  };

  return (
    <>
      <Styled.Form $colors={theme.cores} onSubmit={handleSubmit(submitForm)}>
        <Styled.FormTitle $colors={theme.texto}>
          Cadastrar Dieta
        </Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormSubTitle $colors={theme.texto}>
            Procure o Paciente pelo email
          </Styled.FormSubTitle>
          <Styled.FormRow>
            <InputComponent
              id="patientEmail"
              type="email"
              label="Encontre o paciente pelo email"
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
                  ...register("date", { required: "Campo obrigatório" }),
                }}
                error={!!errors.dietDate}
                helperText={errors.dietDate?.message}
              />
              <InputComponent
                id="dietName"
                type="text"
                label="Nome da Dieta"
                register={{
                  ...register("name", {
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
              <SelectComponent
                id={"dietType"}
                label={"Tipos de Dieta"}
                error={!!errors.gender}
                helperText={errors.gender?.message}
                option={selectDiet}
                register={{
                  ...register("dietType", {
                    required: "Selecione uma das opções",
                  }),
                }}
              />
              <InputComponent
                id="dietTime"
                type="time"
                register={{
                  ...register("time", { required: "Campo obrigatório" }),
                }}
                error={!!errors.dietTime}
                helperText={errors.dietTime?.message}
              />
            </Styled.FormColumn>
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="description"
              type="text"
              placeholder="Descrição do exercicio"
              register={{
                ...register("description", {
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
