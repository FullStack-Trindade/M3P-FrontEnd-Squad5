import PropTypes from "prop-types";

import { InputComponent } from "../../Input/Input.component";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";
import * as Styled from "../Form.styles";
import { ViaCEP } from "../../../services/ViaCep/ViaCep.service";
import { SelectComponent } from "../../Select/Select.component";
import { useEffect, useState } from "react";

import {
  GetID,
  Delete,
  Update,
  StorePatient,
} from "../../../services/Patient/Patient.service";
import { deleteLocalStorage } from "../../../services/LocalStorage.service";
import { useParams } from "react-router-dom";

export const FormRegisterPatientComponent = () => {
  const { id } = useParams();
  const [disabled, setDisabled] = useState(true);
  const [saveDisable, setSaveDisable] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (id) {
      const getPatient = async () => {
        await GetID(id).then(async (data) => {
          setValue("fullName", data.fullName || "");
          setValue("gender", data.gender || "");
          setValue("birthday", data.birthday?.split("T")[0] || "");
          setValue("cpf", data.cpf || "");
          setValue("rg", data.rg || "");
          setValue("civilStatus", data.civilStatus || "");
          setValue("phoneNumber", data.phoneNumber || "");
          setValue("emergencyContact", data.emergencyContact || "");
          setValue("email", data.email || "");
          setValue("nationality", data.nationality || "");
          setValue("listOfAllergies", data.listOfAllergies || "");
          setValue("specificCare", data.specificCare || "");
          setValue("healthInsurance", data.healthInsurance || "");
          setValue("insuranceNumber", data.insuranceNumber || "");
          setValue(
            "insuranceExpirationDate",
            data.insuranceExpirationDate?.split("T")[0] || ""
          );
          setValue("cep", data.address.zipCode || "");
          setValue("city", data.address.city || "");
          setValue("state", data.address.state || "");
          setValue("place", data.address.street || "");
          setValue("number", data.address.number || "");
          setValue("complement", data.address.complement || "");
          setValue("street", data.address.neighborhood || "");
          setValue("referencePoint", data.address.referencePoint || "");
        });
      };
      getPatient();
      setDisabled(false);
      setSaveDisable(true);
      deleteLocalStorage("patient");
    }
  }, []);

  const selectGender = [
    { value: "", label: "Selecione" },
    { value: "male", label: "Masculino" },
    { value: "female", label: "Feminino" },
    { value: "other", label: "Outro" },
  ];

  const selectCivilStatus = [
    { value: "", label: "Selecione" },
    { value: "single", label: "Solteiro" },
    { value: "married", label: "Casado" },
    { value: "separated", label: "Separado" },
    { value: "divorced", label: "Divorciado" },
    { value: "widowed", label: "Viúvo" },
  ];
  const handleCep = async () => {
    await ViaCEP(watch("cep")).then((res) => {
      console.log(res);
      setValue("city", res.localidade);
      setValue("state", res.uf);
      setValue("place", res.logradouro);
      setValue("complement", res.complemento);
      setValue("street", res.bairro);
    });
  };

  const submitForm = async (data) => {
    const body = {
      ...data,
      userId: 1,
    };
    await StorePatient(body);
  };
  const submitEdit = async (data) => {
    const body = {
      ...data,
      userId: 1,
    };
    await Update(id, body);
  };
  const submitDelete = async (id) => {
    await Delete(id);
  };

  return (
    <>
      <Styled.Form onSubmit={handleSubmit(submitForm)}>
        <Styled.FormTitle>Preencha os campos para cadastrar</Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormSubTitle>Identificação</Styled.FormSubTitle>
          <Styled.FormRow>
            <InputComponent
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Digite seu nome"
              label="Nome Completo"
              register={{
                ...register("fullName", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 8,
                    message: "Campo precisa ter acima de 8 caracteres",
                  },
                  maxLength: {
                    value: 64,
                    message: "Campo precisa ter menos de 64 caracteres",
                  },
                }),
              }}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
            <SelectComponent
              id={"gender"}
              name="gender"
              label={"Gênero"}
              error={!!errors.gender}
              helperText={errors.gender?.message}
              option={selectGender}
              register={{
                ...register("gender", { required: "Selecione uma das opções" }),
              }}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="birthday"
              name="birthday"
              type="date"
              register={{
                ...register("birthday", { required: "Campo obrigatório" }),
              }}
              error={!!errors.birthday}
              helperText={errors.birthday?.message}
            />
            <InputComponent
              id="cpf"
              name="cpf"
              type="text"
              label="CPF"
              register={{
                ...register("cpf", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 11,
                    message: "Campo precisa ter acima de 11 caracteres",
                  },
                  maxLength: {
                    value: 14,
                    message: "Campo precisa ter menos de 14 caracteres",
                  },
                }),
              }}
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
            />

            <InputComponent
              id="rg"
              rg="rg"
              type="text"
              placeholder="Digite seu RG"
              label="RG"
              register={{
                ...register("rg", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 7,
                    message: "Campo precisa ter acima de 7 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Campo precisa ter menos de 20 caracteres",
                  },
                }),
              }}
              error={!!errors.rg}
              helperText={errors.rg?.message}
            />
            <SelectComponent
              id={"civilStatus"}
              name="civilStatus"
              label={"Estado Civil"}
              error={!!errors.civilStatus}
              helperText={errors.civilStatus?.message}
              option={selectCivilStatus}
              register={{
                ...register("civilStatus", {
                  required: "Selecione uma das opções",
                }),
              }}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              label="Telefone"
              register={{
                ...register("phoneNumber", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 8,
                    message: "Campo precisa ter acima de 8 caracteres",
                  },
                  maxLength: {
                    value: 11,
                    message: "Campo precisa ter menos de 11 caracteres",
                  },
                }),
              }}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />

            <InputComponent
              id="emergencyContact"
              name="emergencyContact"
              type="text"
              label="Contato de Emergência"
              register={{
                ...register("emergencyContact", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 8,
                    message: "Campo precisa ter acima de 8 caracteres",
                  },
                  maxLength: {
                    value: 11,
                    message: "Campo precisa ter menos de 11 caracteres",
                  },
                }),
              }}
              error={!!errors.emergencyContact}
              helperText={errors.emergencyContact?.message}
            />

            <InputComponent
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu email"
              label="email"
              register={{
                ...register("email", {
                  required: "Campo obrigatório",
                  validate: {
                    matchPath: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
                  },
                }),
              }}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <InputComponent
              id="nationality"
              name="nationality"
              type="text"
              placeholder="Digite sua Naturalidade"
              label="Naturalidade"
              register={{
                ...register("nationality", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 8,
                    message: "Campo precisa ter acima de 5 caracteres",
                  },
                  maxLength: {
                    value: 64,
                    message: "Campo precisa ter menos de 64 caracteres",
                  },
                }),
              }}
              error={!!errors.nationality}
              helperText={errors.nationality?.message}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="listOfAllergies"
              name="listOfAllergies"
              type="textarea"
              placeholder="Lista de Alergias"
              register={{
                ...register("listOfAllergies", {
                  minLength: {
                    value: 1,
                    message: "Campo precisa ter acima de 5 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message: "Campo precisa ter menos de 100 caracteres",
                  },
                }),
              }}
              error={!!errors.listOfAllergies}
              helperText={errors.listOfAllergies?.message}
            />
            <InputComponent
              id="specificCare"
              name="specificCare"
              type="textarea"
              placeholder="Lista de Cuidados Específicos"
              register={{
                ...register("specificCare", {
                  minLength: {
                    value: 1,
                    message: "Campo precisa ter acima de 5 caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message: "Campo precisa ter menos de 100 caracteres",
                  },
                }),
              }}
            />
          </Styled.FormRow>
        </Styled.FormColumn>
        <Styled.FormColumn>
          <Styled.FormSubTitle>Convênio</Styled.FormSubTitle>

          <Styled.FormRow>
            <InputComponent
              id="healthInsurance"
              name="healthInsurance"
              type="text"
              placeholder="Unimed"
              label="Convênio"
              register={{
                ...register("healthInsurance"),
              }}
            />
            <InputComponent
              id="insuranceNumber"
              name="insuranceNumber"
              type="text"
              placeholder="6666666"
              label="Número do Convênio"
              register={{
                ...register("insuranceNumber"),
              }}
            />
            <InputComponent
              id="insuranceExpirationDate"
              name="insuranceExpirationDate"
              type="date"
              register={{
                ...register("insuranceExpirationDate"),
              }}
            />
          </Styled.FormRow>
        </Styled.FormColumn>
        <Styled.FormColumn>
          <Styled.FormSubTitle>Dados de Endereço</Styled.FormSubTitle>
          <Styled.FormRow>
            <InputComponent
              id="cep"
              name="cep"
              type="text"
              placeholder="CEP"
              label="CEP"
              register={{
                ...register("cep", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.cep}
              helperText={errors.cep?.message}
            />
            <Button
              className="cepButton"
              variant="outlined"
              onClick={handleCep}
              type="button"
            ></Button>
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="city"
              name="city"
              type="text"
              placeholder="Cidade"
              register={{
                ...register("city", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.city}
              helperText={errors.city?.message}
            />
            <InputComponent
              id="state"
              name="state"
              type="text"
              placeholder="Estado"
              register={{
                ...register("state", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.state}
              helperText={errors.state?.message}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="place"
              name="place"
              type="text"
              placeholder="Logradouro"
              register={{
                ...register("place", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.place}
              helperText={errors.place?.message}
            />

            <InputComponent
              id="number"
              name="number"
              type="text"
              placeholder="Número"
              register={{
                ...register("number", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.number}
              helperText={errors.number?.message}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="complement"
              name="complement"
              type="text"
              placeholder="Complemento"
              register={{
                ...register("complement"),
              }}
            />
            <InputComponent
              id="street"
              name="street"
              type="text"
              placeholder="Bairro"
              register={{
                ...register("street", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.street}
              helperText={errors.street?.message}
            />
            <InputComponent
              id="referencePoint"
              name="referencePoint"
              type="referencePoint"
              placeholder="Ponto de Referência"
              register={{
                ...register("referencePoint"),
              }}
            />
          </Styled.FormRow>
          <Styled.ButtonWrapper>
            <Button
              variant="outlined"
              type="button"
              onClick={handleSubmit(submitEdit)}
              disabled={disabled}
            >
              Editar
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleSubmit(submitDelete(id))}
              disabled={disabled}
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

FormRegisterPatientComponent.propTypes = {
  id: PropTypes.number,
};
