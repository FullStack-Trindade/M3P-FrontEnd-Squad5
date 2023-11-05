import { InputComponent } from "../../Input/Input.component";

import Button from "@mui/material/Button";
import * as Styled from "../Form.styles";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext/Theme.context";

export const FormThemeConfiguration = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const { theme, setTheme } = useContext(ThemeContext);

  const submitEdit = async (data) => {
    const body = {
      cores: {
        primary: data.primaryColor,
        secondary: data.secondaryColor,
      },
      texto: {
        primary: data.primaryTextColor,
        secondary: data.secondaryTextColor,
      },
      nomeEmpresa: data.companyName,
      slogan: data.slogan,
      logo: data.logoURL,
    };
    setTheme(body);
  };
  return (
    <>
      <Styled.Form $colors={theme.cores} onSubmit={handleSubmit(submitEdit)}>
        <Styled.FormTitle $colors={theme.texto}>
          Cadastrar Exercício
        </Styled.FormTitle>
        <Styled.FormColumn>
          <Styled.FormRow>
            <InputComponent
              id="primaryColor"
              type="color"
              label="Escolha a cor primaria"
              register={{
                ...register("primaryColor", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.primaryColor}
              helperText={errors.primaryColor?.message}
            />
            <InputComponent
              id="secondaryColor"
              type="color"
              label="Escolha a cor secundaria"
              register={{
                ...register("secondaryColor", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.secondaryColor}
              helperText={errors.secondaryColor?.message}
            />
            <InputComponent
              id="primaryTextColor"
              type="color"
              label="Escolha a cor primaria de texto"
              register={{
                ...register("primaryTextColor", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.primaryTextColor}
              helperText={errors.primaryTextColor?.message}
            />
            <InputComponent
              id="secondaryTextColor"
              type="color"
              label="Escolha a cor secundaria de texto"
              register={{
                ...register("secondaryTextColor", {
                  required: "Campo obrigatório",
                }),
              }}
              error={!!errors.secondaryTextColor}
              helperText={errors.secondaryTextColor?.message}
            />
          </Styled.FormRow>
          <InputComponent
            id="companyName"
            type="text"
            placeholder="Nome da Empresa"
            register={{
              ...register("companyName", {
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
            error={!!errors.companyName}
            helperText={errors.companyName?.message}
          />
          <InputComponent
            id="slogan"
            type="text"
            placeholder="Slogan da Empresa"
            register={{
              ...register("slogan", {
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
            error={!!errors.slogan}
            helperText={errors.slogan?.message}
          />
          <InputComponent
            id="logoURL"
            type="url"
            placeholder="Digite a URL do Logo"
            register={{
              ...register("logoURL", {
                required: "Campo obrigatório",
              }),
            }}
            error={!!errors.logoURL}
            helperText={errors.logoURL?.message}
          />
          <Styled.ButtonWrapper>
            <Button variant="outlined" type="submit">
              Editar
            </Button>
          </Styled.ButtonWrapper>
        </Styled.FormColumn>
      </Styled.Form>
    </>
  );
};
