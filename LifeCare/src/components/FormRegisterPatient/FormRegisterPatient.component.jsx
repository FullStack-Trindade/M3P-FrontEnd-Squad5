import { InputComponent } from "../Input/Input.component";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";
import * as Styled from "./FormRegisterPatient.styles";
import { ViaCEP } from "../../services/ViaCep/ViaCep.service";
import { SelectComponent } from "../Select/Select.component";

export const FormRegisterComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

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
      <Styled.FormPatient onSubmit={handleSubmit(submitForm)}>
        <Styled.FormTitle>Preencha os campos para cadastrar</Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormLegend>Indentificação</Styled.FormLegend>
          <Styled.FormRow>
            <InputComponent
              id="fullName"
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
              type="date"
              register={{
                ...register("birthday", { required: "Campo obrigatório" }),
              }}
              error={!!errors.birthday}
              helperText={errors.birthday?.message}
            />
            <InputComponent
              id="cpf"
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
              type="text"
              placeholder="Digite seu RG"
              label="RG"
              register={{
                ...register("rg", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 14,
                    message: "Campo precisa ter acima de 14 caracteres",
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
          <Styled.FormLegend>Convênio</Styled.FormLegend>

          <Styled.FormRow>
            <InputComponent
              id="healthInsurance"
              type="text"
              placeholder="Unimed"
              label="Convênio"
              register={{
                ...register("healthInsurance"),
              }}
            />
            <InputComponent
              id="insuranceNumber"
              type="text"
              placeholder="6666666"
              label="Número do Convênio"
              register={{
                ...register("insuranceNumber"),
              }}
            />
            <InputComponent
              id="insuranceExpirationDate"
              type="date"
              register={{
                ...register("insuranceExpirationDate"),
              }}
            />
          </Styled.FormRow>
        </Styled.FormColumn>
        <Styled.FormColumn>
          <Styled.FormLegend>Dados de Endereço</Styled.FormLegend>
          <Styled.FormRow>
            <InputComponent
              id="cep"
              type="text"
              placeholder="CEP"
              label="CEP"
              register={{
                ...register("cep"),
              }}
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
              type="text"
              placeholder="Cidade"
              register={{
                ...register("city"),
              }}
            />
            <InputComponent
              id="state"
              type="text"
              placeholder="Estado"
              register={{
                ...register("state"),
              }}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="place"
              type="text"
              placeholder="Logradouro"
              register={{
                ...register("place"),
              }}
            />

            <InputComponent
              id="number"
              type="text"
              placeholder="Número"
              register={{
                ...register("number"),
              }}
            />
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="complement"
              type="text"
              placeholder="Complemento"
              register={{
                ...register("complement"),
              }}
            />
            <InputComponent
              id="street"
              type="text"
              placeholder="Bairro"
              register={{
                ...register("street"),
              }}
            />
            <InputComponent
              id="referencePoint"
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
      </Styled.FormPatient>
    </>
  );
};
