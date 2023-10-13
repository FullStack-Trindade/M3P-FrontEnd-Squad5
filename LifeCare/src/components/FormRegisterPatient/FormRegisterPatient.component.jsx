import Button from "@mui/material/Button";
import { InputComponent } from "../Input/Input.component";
import { useForm } from "react-hook-form";

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

    await setValue("birthdate", new Date(body.birthdate));
  };
  const submitDelete = async () => {};

  return (
    <div>
      <form
        className="formRegisterPContainer"
        onSubmit={handleSubmit(submitForm)}
      >
        <legend className="formTitle">Preencha os campos para cadastrar</legend>
        <div className="formContent">
          <legend className="formTitle">Indentificação</legend>
          <div className="formRow">
            <InputComponent
              id="name"
              type="text"
              placeholder="Digite seu nome"
              label="Nome Completo"
              register={{
                ...register("name", {
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                }),
              }}
              error={errors.name}
            />
            <InputComponent
              id="age"
              type="number"
              placeholder="Digite sua Idade"
              label="Idade"
              register={{
                ...register("age", {
                  required: true,
                }),
              }}
              error={errors.age}
            />
            <InputComponent
              id="url"
              type="text"
              placeholder="Link sua Imagem"
              label="Imagem"
              register={{
                ...register("url", {}),
              }}
              error={errors.url}
            />

            <div className="select">
              <label className="genderLabel" htmlFor="gender">
                Gênero
              </label>
              <select id="gender" {...register("gender", { required: true })}>
                <option value="Homem">Homem</option>
                <option value="Mulher">Mulher</option>
                <option value="Outro">outro</option>
              </select>
            </div>
          </div>
          <div className="formRow">
            <InputComponent
              id="birthdate"
              type="date"
              label="Data de Nascimento"
              register={{
                ...register("birthdate", { required: true }),
              }}
              error={errors.birthdate}
            />
            <InputComponent
              id="cpf"
              type="text"
              label="CPF"
              register={{
                ...register("cpf", {
                  required: true,
                  maxLength: 11,
                }),
              }}
              error={errors.cpf}
            />
            ;
            <InputComponent
              id="rg"
              type="text"
              placeholder="Digite seu RG"
              label="RG"
              register={{
                ...register("rg", { required: true, maxLength: 11 }),
              }}
              error={errors.rg}
            />
            <div className="select">
              <label className="labelMstatus" htmlFor="maritalStatus">
                Estado Civil
              </label>
              <select
                id="maritalStatus"
                {...register("maritalStatus", { required: true })}
              >
                <option value="Solteiro">Solteiro</option>
                <option value="Casado">Casado</option>
                <option value="Separado">Separado</option>
                <option value="Divorciado">Divorciado </option>
                <option value="Viúvo">Viúvo</option>
              </select>
            </div>
          </div>
          <div className="formRow">
            <InputComponent
              id="telephone"
              type="text"
              label="Telefone"
              register={{
                ...register("telephone", { required: true }),
              }}
              error={errors.telephone}
            />
            <InputComponent
              id="emergency"
              type="text"
              label="Contato de Emergência"
              register={{
                ...register("emergency", { required: true }),
              }}
              error={errors.emergency}
            />

            <InputComponent
              id="email"
              type="email"
              placeholder="Digite seu email"
              label="email"
              register={{
                ...register("email", {
                  validate: {
                    matchPath: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
                  },
                }),
              }}
              error={errors.email}
            />
            <InputComponent
              id="nationality"
              type="text"
              placeholder="Digite sua Naturalidade"
              label="Naturalidade"
              register={{
                ...register("nationality", {
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                }),
              }}
              error={errors.nationality}
            />
          </div>
          <div className="formRow ">
            <InputComponent
              id="allergies"
              type="textarea"
              placeholder="Lista de Alergias"
              register={{
                ...register("allergies", {
                  maxLength: 500,
                }),
              }}
              error={errors.allergies}
            />
            <InputComponent
              id="specificCare"
              type="textarea"
              placeholder="Lista de Cuidados Específicos"
              register={{
                ...register("specificCare", {
                  maxLength: 500,
                }),
              }}
              error={errors.specificCare}
            />
          </div>
        </div>
        <div className="formContent">
          <legend className="formTitle">Convênio</legend>

          <div className="formRow">
            <InputComponent
              id="insurance"
              type="text"
              placeholder="Unimed"
              label="Convênio"
              register={{
                ...register("insurance"),
              }}
              error={errors.insurance}
            />
            <InputComponent
              id="insuranceNumber"
              type="text"
              placeholder="6666666"
              label="Número do Convênio"
              register={{
                ...register("insuranceNumber"),
              }}
              error={errors.insuranceNumber}
            />
            <InputComponent
              id="expireDate"
              type="date"
              label="Validade do Convênio "
              register={{
                ...register("expireDate"),
              }}
              error={errors.expireDate}
            />
          </div>
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
              error={errors.cep}
            />
            <Button
              className="cepButton"
              variant="outlined"
              type="button"
            ></Button>
          </div>
          <div className="formRow">
            <InputComponent
              id="city"
              type="text"
              placeholder="Endereço"
              label="Cidade"
              register={{
                ...register("city"),
              }}
              error={errors.city}
              readOnly
            />
            <InputComponent
              id="state"
              type="text"
              placeholder="Estado"
              label="Estado"
              readOnly
              register={{
                ...register("state"),
              }}
              error={errors.state}
            />
          </div>
          <div className="formRow">
            <InputComponent
              id="place"
              type="text"
              placeholder="Logradouro"
              label="Logradouro"
              register={{
                ...register("place"),
              }}
              error={errors.place}
              readOnly
            />

            <InputComponent
              id="number"
              type="text"
              placeholder="Número"
              label="Número"
              register={{
                ...register("number"),
              }}
              error={errors.number}
              readOnly
            />
          </div>
          <div className="formRow">
            <InputComponent
              id="complement"
              type="text"
              placeholder="Complemento"
              label="Complemento"
              register={{
                ...register("complement"),
              }}
              error={errors.complement}
              readOnly
            />
            <InputComponent
              id="street"
              type="text"
              placeholder="Bairro"
              label="Bairro"
              register={{
                ...register("street"),
              }}
              error={errors.street}
              readOnly
            />
            <InputComponent
              id="referencePoint"
              type="referencePoint"
              placeholder="Ponto de Referência"
              label="Ponto de Referência"
              register={{
                ...register("referencePoint"),
              }}
              error={errors.referencePoint}
              readOnly
            />
          </div>
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
      </form>
    </div>
  );
};
