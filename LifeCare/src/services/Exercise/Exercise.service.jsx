import axios from "axios";

let API_URL = "http://localhost:3333/api/exercicios";

const Get = async () => {
  const exerciseData = await axios.get(API_URL);
  return exerciseData.data.data;
};

const GetID = async (id) => {
  const exerciseData = await axios.get(`${API_URL}/${id}`);
  return exerciseData.data.data;
};

const Store = async (newData) => {
  axios
    .post(API_URL, {
      exerciseName: newData.exerciseName,
      date: newData.date,
      time: newData.time,
      exerciseType: newData.exerciseType,
      quantityPerWeek: newData.quantityPerWeek,
      description: newData.description,
      patientId: newData.patientId,
      userId: newData.userId,
    })
    .then((res) => {
      alert(res);
    })
    .catch((err) => {
      alert(`Erro ao cadastrar ${err.message}`);
    });
};
const Update = async (id, newData) => {
  axios
    .put(`${API_URL}/${id}`, {
      exerciseName: newData.exerciseName,
      date: newData.date,
      time: newData.time,
      exerciseType: newData.exerciseType,
      quantityPerWeek: newData.quantityPerWeek,
      description: newData.description,
      patientId: newData.patientId,
      userId: newData.userId,
    })
    .then((res) => {
      alert(res);
    })
    .catch((err) => {
      alert(`Erro ao atualizar ${err.message}`);
    });
};

const Delete = async (id) => {
  await axios
    .delete(`${API_URL}/${id}`)
    .then((res) => {
      alert(res);
    })
    .catch((err) => {
      alert(`Erro ao deletar ${err.message}`);
    });
};

export const Exercise = {
  Store,
  GetID,
  Get,
  Update,
  Delete,
};
