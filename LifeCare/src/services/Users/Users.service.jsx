import { axiosInstance } from "../../helper/axiosInstance";

export const GetUsers = async () => {
  try {
    const data = await axiosInstance
      .get(`/usuarios`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetID = async (id) => {
  try {
    const patientData = await axiosInstance
      .get(`/usuarios/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return patientData;
  } catch (error) {
    console.log(error);
  }
};

export const Store = async (data) => {
  function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  await axiosInstance
    .post(
      `/usuarios`,
      {
        fullName: data.fullName,
        gender: data.gender,
        email: data.email,
        cpf: formatCPF(data.cpf),
        phoneNumber: data.phoneNumber,
        type: data.type,
        systemStatus: true,
        password: data.password,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    .then(async () => {
      alert("Usuário cadastrado com sucesso");
    })
    .catch((err) => {
      console.log("err: ", err.response.data);
      alert(`Erro ao cadastrar ${err.response.data.message}`);
    });
};

export const Delete = async (id) => {
  await axiosInstance
    .delete(`/usuarios/${id}`)
    .then(() => {
      alert("Usuário removido com sucesso");
    })
    .catch((err) => {
      console.log("err: ", err.response.data);
    });
};

export const Update = async (id, newData) => {
  const data = {
    fullName: newData.fullName,
    gender: newData.gender,
    type: newData.type,
    cpf: newData.cpf,
    phoneNumber: newData.phoneNumber,
    email: newData.email,
    password: newData.password,
    systemStatus: true,
  };

  await axiosInstance
    .put(`/usuarios/${id}`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(() => {
      alert("Atualizado com sucesso");
    })
    .catch((err) => {
      console.log("err: ", err);
      alert(`Erro ao atualizar ${err.message}`);
    });
};
