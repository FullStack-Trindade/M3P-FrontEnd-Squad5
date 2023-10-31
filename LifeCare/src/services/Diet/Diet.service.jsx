import axios from "axios";

let API_URL = "http://localhost:3333/api/dietas";

const Get = async () => {
  const dietData = await axios.get(API_URL);
  return dietData.data.data;
};

const GetID = async (id) => {
  const dietData = await axios.get(`${API_URL}/${id}`);
  return dietData.data.data;
};

const Store = async (newData) => {
  axios
    .post(API_URL, {
      name: newData.name,
      date: newData.date,
      time: newData.time,
      dietType: newData.dietType,
      description: newData.description,
      patientId: newData.patientId,
      userId: newData.userId,
    })
    .then((res) => {
      alert("Cadastrado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao cadastrar ${err.message}`);
    });
};
const Update = async (id, newData) => {
  axios
    .put(`${API_URL}/${id}`, {
      dietReason: newData.dietReason,
      date: newData.date,
      time: newData.time,
      dietType: newData.dietType,
      description: newData.description,
      patientId: newData.patientId,
      userId: newData.userId,
    })
    .then((res) => {
      alert("Atualizado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao atualizar ${err.message}`);
    });
};

const Delete = async (id) => {
  await axios
    .delete(`${API_URL}/${id}`)
    .then((res) => {
      alert("Deletado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao deletar ${err.message}`);
    });
};

export const Diet = {
  Store,
  Get,
  GetID,
  Update,
  Delete,
};
