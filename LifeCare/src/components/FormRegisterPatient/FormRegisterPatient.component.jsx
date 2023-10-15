import { InputComponent } from "../Input/Input.component";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";
import * as Styled from "./FormRegisterPatient.styles";

export const FormRegisterComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  /*
  const handleCep = async () => {
  
    await ViaCep.Get(watch("cep")).then((response) => {
      setValue("city", response.localidade);
      setValue("state", response.uf);
      setValue("place", response.logradouro);
      setValue("complement", response.complemento);
      setValue("street", response.bairro);
    });
  };
  */
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
        <legend className="formTitle">Preencha os campos para cadastrar</legend>
        <div className="formContent">
          <legend className="formTitle">Indentificação</legend>
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
            <InputComponent
              id="url"
              type="text"
              placeholder="Link sua Imagem"
              label="Imagem"
              register={{
                ...register("url"),
              }}
            />

            <div className="select">
              <label className="genderLabel" htmlFor="gender">
                Gênero
              </label>
              <select
                id="gender"
                {...register("gender", { required: "Campo obrigatório" })}
              >
                <option value="">Selecione</option>
                <option value="male">Homem</option>
                <option value="female">Mulher</option>
                <option value="other">outro</option>
              </select>
            </div>
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
            <div className="select">
              <label className="civilStatus" htmlFor="civilStatus">
                Estado Civil
              </label>
              <select
                id="civilStatus"
                {...register("civilStatus", { required: true })}
              >
                <option value="">Selecione</option>
                <option value="single">Solteiro</option>
                <option value="married">Casado</option>
                <option value="separated">Separado</option>
                <option value="divorced">Divorciado </option>
                <option value="widowed">Viúvo</option>
              </select>
            </div>
          </Styled.FormRow>
          <Styled.FormRow>
            <InputComponent
              id="telephone"
              type="text"
              label="Telefone"
              register={{
                ...register("telephone", { required: "Campo obrigatório" }),
              }}
              error={!!errors.telephone}
              helperText={errors.telephone?.message}
            />

            <InputComponent
              id="emergencyContact"
              type="text"
              label="Contato de Emergência"
              register={{
                ...register("emergencyContact", {
                  required: "Campo obrigatório",
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
        </div>
        <div className="formContent">
          <legend className="formTitle">Convênio</legend>

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
        </div>
        <div className="formContent">
          <legend className="formTitle">Dados de Endereço</legend>
          <div className="formRowSearch">
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
              type="button"
            ></Button>
          </div>
          <Styled.FormRow>
            <InputComponent
              id="city"
              type="text"
              placeholder="Endereço"
              label="Cidade"
              register={{
                ...register("city"),
              }}
            />
            <InputComponent
              id="state"
              type="text"
              placeholder="Estado"
              label="Estado"
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
              label="Logradouro"
              register={{
                ...register("place"),
              }}
            />

            <InputComponent
              id="number"
              type="text"
              placeholder="Número"
              label="Número"
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
              label="Complemento"
              register={{
                ...register("complement"),
              }}
            />
            <InputComponent
              id="street"
              type="text"
              placeholder="Bairro"
              label="Bairro"
              register={{
                ...register("street"),
              }}
            />
            <InputComponent
              id="referencePoint"
              type="referencePoint"
              placeholder="Ponto de Referência"
              label="Ponto de Referência"
              register={{
                ...register("referencePoint"),
              }}
            />
          </Styled.FormRow>
          <div>
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
          </div>
        </div>
      </Styled.FormPatient>
    </>
  );
};
