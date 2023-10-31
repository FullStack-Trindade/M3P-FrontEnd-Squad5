import axios from "axios";

let API_URL = "http://localhost:3333/api/medicamentos";

const Get = async () => {
  const medicineData = await axios.get(API_URL);
  return medicineData.data.data;
};

const GetID = async (id) => {
  const medicineData = await axios.get(`${API_URL}/${id}`);
  return medicineData.data.data;
};

const Store = async (newData) => {
  axios
    .post(API_URL, {
      name: newData.name,
      date: newData.date,
      time: newData.time,
      medicineType: newData.medicineType,
      amount: newData.amount,
      unit: newData.unit,
      comments: newData.comments,
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
      name: newData.name,
      date: newData.date,
      time: newData.time,
      medicineType: newData.medicineType,
      amount: newData.amount,
      unit: newData.unit,
      comments: newData.comments, 
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

export const Medicine = {
  Store,
  GetID,
  Get,
  Update,
  Delete,
};
