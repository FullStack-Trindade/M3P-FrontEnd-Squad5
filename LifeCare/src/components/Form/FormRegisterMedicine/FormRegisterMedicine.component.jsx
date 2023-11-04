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
  DeleteMedicine,
  GetMedicineID,
  StoreMedicine,
  UpdateMedicine,
} from "../../../services/Medicine/Medicine.service";
import { ThemeContext } from "../../../contexts/ThemeContext/Theme.context";

export const FormRegisterMedicineComponent = () => {
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
      const getMedicine = async () => {
        await GetMedicineID(id).then(async (res) => {
          setValue("name", res.data.name);
          setValue("date", res.data.date);
          setValue("time", res.data.time);
          setValue("medicineType", res.data.medicineType);
          setValue("amount", res.data.amount);
          setValue("unit", res.data.unit);
          setValue("comments", res.data.comments);
          setValue("patientId", res.data.patientId);
          await GetID(res.data.patientId).then(async (patient) => {
            setValue("patientName", patient.fullName);
            setValue("patientEmail", patient.email);
          });
        });
      };
      getMedicine();
      setDisable(false);
      setSaveDisable(true);
    }
  }, []);
  const selectMedicineType = [
    { value: "", label: "Selecione" },
    { value: "capsule", label: "Cápsula" },
    { value: "pill", label: "Comprimido" },
    { value: "liquid", label: "Líquido" },
    { value: "cream", label: "Creme" },
    { value: "gel", label: "Gel" },
    { value: "inhalation", label: "Inalação" },
    { value: "injection", label: "Injeção" },
    { value: "spray", label: "Spray" },
  ];

  const selectMedicineUnit = [
    { value: "", label: "Selecione" },
    { value: "mg", label: "mg" },
    { value: "mcg", label: "mcg" },
    { value: "g", label: "g" },
    { value: "ml", label: "ml" },
    { value: "%", label: "%" },
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
    await StoreMedicine(body);
  };

  const submitEdit = async (data) => {
    const body = {
      ...data,
      userId: 1,
    };
    await UpdateMedicine(id, body);
  };
  const submitDelete = async () => {
    await DeleteMedicine(id);
  };

  return (
    <>
      <Styled.Form $colors={theme.cores} onSubmit={handleSubmit(submitForm)}>
        <Styled.FormTitle $colors={theme.texto}>
          Cadastrar Medicamento
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
                readOnly
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
                id="medicineDate"
                type="date"
                register={{
                  ...register("date", { required: "Campo obrigatório" }),
                }}
                error={!!errors.date}
                helperText={errors.date?.message}
              />
            </Styled.FormColumn>
            <Styled.FormColumn>
              <InputComponent
                readOnly
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
                id="medicineTime"
                type="time"
                register={{
                  ...register("time", { required: "Campo obrigatório" }),
                }}
                error={!!errors.dietTime}
                helperText={errors.dietTime?.message}
              />
            </Styled.FormColumn>
            <Styled.FormColumn>
              <InputComponent
                id="medicineName"
                type="text"
                label="Nome do Medicamento"
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
                error={!!errors.name}
                helperText={errors.name?.message}
              />

              <InputComponent
                id="medicineAmount"
                label="Quantidade do Medicamento  "
                type="number"
                register={{
                  ...register("amount", { required: "Campo obrigatório" }),
                }}
                error={!!errors.amount}
                helperText={errors.amount?.message}
              />
            </Styled.FormColumn>
            <Styled.FormColumn>
              <SelectComponent
                id={"medicineType"}
                label={"Tipos de Medicamento"}
                error={!!errors.medicineType}
                helperText={errors.medicineType?.message}
                option={selectMedicineType}
                register={{
                  ...register("medicineType", {
                    required: "Selecione uma das opções",
                  }),
                }}
              />

              <SelectComponent
                id={"medicineUnit"}
                label={"Unidade do Medicamento"}
                error={!!errors.unit}
                helperText={errors.unit?.message}
                option={selectMedicineUnit}
                register={{
                  ...register("unit", {
                    required: "Selecione uma das opções",
                  }),
                }}
              />
            </Styled.FormColumn>
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="medicineComments"
              label="Observações"
              type="text"
              register={{
                ...register("comments", { required: "Campo obrigatório" }),
                minLength: {
                  value: 10,
                  message: "Campo deve ter pelo menos 10 caracteres",
                },
                maxLength: {
                  value: 1000,
                  message: "Campo deve ter no máximo 1000 caracteres",
                },
              }}
              error={!!errors.comments}
              helperText={errors.comments?.message}
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
