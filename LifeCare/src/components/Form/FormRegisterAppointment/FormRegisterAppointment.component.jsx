import { InputComponent } from "../../Input/Input.component";

import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import * as Styled from "../Form.styles";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  DeleteAppointment,
  GetAppointmentID,
  StoreAppointment,
  UpdateAppointment,
} from "../../../services/Appointment/Appointment.service";
import { useContext, useEffect, useState } from "react";
import { GetEmail, GetID } from "../../../services/Patient/Patient.service";
import { ThemeContext } from "../../../contexts/ThemeContext/Theme.context";

export const FormRegisterAppointment = () => {
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
      const getAppointment = async () => {
        await GetAppointmentID(id).then(async (res) => {
          setValue("appointmentReason", res.data.appointmentReason);
          setValue("appointmentDate", res.data.appointmentDate);
          setValue("appointmentTime", res.data.appointmentTime);
          setValue("description", res.data.description);
          setValue("prescriptionMedication", res.data.prescriptionMedication);
          setValue("dosagePrecautions", res.data.dosagePrecautions);
          setValue("patientId", res.data.patientId);
          await GetID(res.data.patientId).then(async (patient) => {
            setValue("patientName", patient.fullName);
            setValue("patientEmail", patient.email);
          });
        });
      };
      getAppointment();
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
    await StoreAppointment(body);
  };

  const submitEdit = async (data) => {
    const body = {
      ...data,
      userId: 1,
    };
    await UpdateAppointment(id, body);
  };
  const submitDelete = async () => {
    await DeleteAppointment(id);
  };

  return (
    <>
      <Styled.Form $colors={theme.cores} onSubmit={handleSubmit(submitForm)}>
        <Styled.FormTitle $colors={theme.texto}>
          Cadastrar Consulta
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
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="appointmentReason"
              type="text"
              placeholder="Motivo da consulta"
              register={{
                ...register("appointmentReason", {
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
              error={!!errors.appointmentReason}
              helperText={errors.appointmentReason?.message}
            />
            <InputComponent
              id="appointmentDate"
              type="date"
              register={{
                ...register("appointmentDate", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.appointmentDate}
              helperText={errors.appointmentDate?.message}
            />

            <InputComponent
              id="appointmentTime"
              type="time"
              register={{
                ...register("appointmentTime", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.appointmentTime}
              helperText={errors.appointmentTime?.message}
            />
          </Styled.FormRow>
          <Styled.FormColumn>
            <InputComponent
              id="description"
              type="textarea"
              placeholder="Descrição do Problema"
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
            <InputComponent
              id="prescriptionMedication"
              type="textarea"
              placeholder="Medicação Receitada"
              register={{
                ...register("prescriptionMedication"),
              }}
              error={!!errors.prescriptionMedication}
              helperText={errors.prescriptionMedication?.message}
            />
            <InputComponent
              id="dosagePrecautions"
              type="textarea"
              placeholder="Descrição do Problema"
              register={{
                ...register("dosagePrecautions", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 16,
                    message: "Campo deve ter pelo menos 16 caracteres",
                  },
                  maxLength: {
                    value: 256,
                    message: "Campo deve ter no máximo 256 caracteres",
                  },
                }),
              }}
              error={!!errors.dosagePrecautions}
              helperText={errors.dosagePrecautions?.message}
            />
          </Styled.FormColumn>
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
