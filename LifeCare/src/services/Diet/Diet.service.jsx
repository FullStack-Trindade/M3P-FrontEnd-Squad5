import { axiosInstance } from "../../helper/axiosInstance";

export const GetDiets = async () => {
  try {
    const dietData = await axiosInstance
      .get(`/dietas`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return dietData;
  } catch (error) {
    console.log(error);
  }
};

export const GetDietID = async (id) => {
  try {
    const dietData = await axiosInstance
      .get(`/dietas/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return dietData;
  } catch (error) {
    console.log(error);
  }
};

export const StoreDiet = async (newData) => {
  const data = {
    name: newData.name,
    date: newData.date,
    time: newData.time,
    dietType: newData.dietType,
    description: newData.description,
    patientId: newData.patientId,
    userId: newData.userId,
  };
  await axiosInstance
    .post(`/dietas`, data, {
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
export const UpdateDiet = async (id, newData) => {
  const data = {
    name: newData.name,
    date: newData.date,
    time: newData.time,
    dietType: newData.dietType,
    description: newData.description,
    patientId: newData.patientId,
    userId: newData.userId,
  };
  await axiosInstance
    .put(`/dietas/${id}`, data, {
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
export const DeleteDiet = async (id) => {
  await axiosInstance
    .delete(`/dietas/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      alert("Deletado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao deletar ${err.message}`);
    });
};
