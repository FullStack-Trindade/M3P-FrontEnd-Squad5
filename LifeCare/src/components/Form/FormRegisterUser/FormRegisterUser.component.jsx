import { SelectComponent } from "../../Select/Select.component";
import { InputComponent } from "../../Input/Input.component";
import * as Styled from "../Form.styles";

import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  GetUser,
  GetUserID,
  StoreUser,
  UpdateUser,
  DeleteUser,
} from "../../../services/User/User.service";

export const FormRegisterUser = () => {
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

  useEffect(() => {
    if (id) {
      const getUser = async () => {
        await GetUserID(id).then(async (res) => {
          setValue("id", res.id);
          setValue("fullName", res.fullName);
          setValue("gender", res.gender);
          setValue("email", res.email);
          setValue("cpf", res.cpf);
          setValue("phoneNumber", res.phoneNumber);
          setValue("type", res.type);
        });
      };
      getUser();
      setDisable(false);
      setSaveDisable(true);
    } else {
      const getUsers = async () => {
        GetUser();
      };
      getUsers();
      setDisable(false);
      setSaveDisable(true);
    }
  }, []);

  const selectGender = [
    { value: "", label: "Selecione" },
    { value: "male", label: "Masculino" },
    { value: "female", label: "Feminino" },
    { value: "other", label: "Outro" },
  ];
  const selectType = [
    { value: "", label: "Selecione" },
    { value: "admin", label: "Administrador" },
    { value: "medic", label: "Medico(a)" },
    { value: "nurse", label: "Enfermeiro(a)" },
  ];
  const submitForm = async (data) => {
    const body = {
      ...data,
    };
    console.log(body);
    await StoreUser(body);
  };
  const submitEdit = async (data) => {
    const body = {
      ...data,
    };
    console.log(id, body);
    await UpdateUser(id, body);
  };
  const submitDelete = async () => {
    console.log(id);
    await DeleteUser(id);
  };

  return (
    <>
      <Styled.Form onSubmit={handleSubmit(submitForm)}>
        <Styled.FormTitle>Preencha os campos para cadastrar</Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormSubTitle>Cadastre um Usuario</Styled.FormSubTitle>
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
            <SelectComponent
              id={"type"}
              label={"Tipo de Usuario"}
              error={!!errors.type}
              helperText={errors.type?.message}
              option={selectType}
              register={{
                ...register("type", {
                  required: "Selecione uma das opções",
                }),
              }}
            />
          </Styled.FormRow>
          <Styled.FormRow>
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
          </Styled.FormRow>
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
          <Styled.FormRow>
            <InputComponent
              id="password"
              type="password"
              label="Digite sua senha"
              register={{
                ...register("password", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 6,
                    message: "Campo precisa ter acima de 6 caracteres",
                  },
                }),
              }}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <InputComponent
              id="passwordVerify"
              type="password"
              label="Confirme sua senha"
              register={{
                ...register("passwordVerify", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 6,
                    message: "Campo precisa ter acima de 6 caracteres",
                  },
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "As senhas estão diferentes";
                    }
                  },
                }),
              }}
              error={!!errors.passwordVerify}
              helperText={errors.passwordVerify?.message}
            />
          </Styled.FormRow>
        </Styled.FormColumn>
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
      </Styled.Form>
    </>
  );
};
