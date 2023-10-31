import axios from "axios";

let API_URL = "http://localhost:3333/api/exames";

const Get = async () => {
  const examData = await axios.get(API_URL);
  return examData.data.data;
};

const GetID = async (id) => {
  const examData = await axios.get(`${API_URL}/${id}`);
  return examData.data.data;
};

const Store = async (newData) => {
  axios
    .post(API_URL, {
      name: newData.name,
      examDate: newData.examDate,
      examTime: newData.examTime,
      examType: newData.examType,
      laboratory: newData.laboratory,
      documentURL: newData.documentURL,
      results: newData.results,
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
      name: newData.name,
      examDate: newData.examDate,
      examTime: newData.examTime,
      examType: newData.examType,
      laboratory: newData.laboratory,
      documentURL: newData.documentURL,
      results: newData.results,
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

export const Exam = {
  Store,
  Get,
  GetID,
  Update,
  Delete,
};
