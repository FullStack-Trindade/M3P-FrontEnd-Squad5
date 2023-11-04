import { axiosInstance } from "../../helper/axiosInstance";

export const GetUser = async () => {
  try {
    const userData = await axiosInstance
      .get(`/usuarios`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return userData;
  } catch (error) {
    console.log(error);
  }
};

export const GetUserID = async (id) => {
  try {
    const userData = await axiosInstance
      .get(`/usuarios/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return userData;
  } catch (error) {
    console.log(error);
  }
};

export const StoreUser = async (newData) => {
  const data = {
    fullName: newData.fullName,
    gender: newData.gender,
    email: newData.email,
    cpf: newData.cpf,
    phoneNumber: newData.phoneNumber,
    type: newData.type,
    password: newData.password,
  };
  await axiosInstance
    .post(`/usuarios`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      alert("Cadastrado com sucesso");
    })
    .catch((err) => {
      console.log("err: ", err);
      alert(`Erro ao cadastrar ${err.message}`);
    });
};
export const UpdateUser = async (id, newData) => {
  const data = {
    fullName: newData.fullName,
    gender: newData.gender,
    phoneNumber: newData.phoneNumber,
    type: newData.type,
    password: newData.password,
  };
  await axiosInstance
    .put(`/usuarios/${id}`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      alert("Atualizado com sucesso");
    })
    .catch((err) => {
      console.log("err: ", err);
      alert(`Erro ao atualizar ${err.message}`);
    });
};
export const DeleteUser = async (id) => {
  await axiosInstance
    .delete(`/usuarios/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      alert("Deletado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao deletar ${err.message}`);
    });
};
