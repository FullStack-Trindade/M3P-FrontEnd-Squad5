import axios from "axios";

let API_URL = "http://localhost:3333/api/consultas";

const GetID = async (id) => {
  const appointmentData = await axios.get(`${API_URL}/${id}`);
  return appointmentData.data.data;
};

const Store = async (newData) => {
  axios
    .post(API_URL, {
      appointmentReason: newData.appointmentReason,
      appointmentDate: newData.appointmentDate,
      appointmentTime: newData.appointmentTime,
      description: newData.description,
      prescriptionMedication: newData.prescriptionMedication,
      dosagePrecautions: newData.dosagePrecautions,
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
      appointmentReason: newData.appointmentReason,
      appointmentDate: newData.appointmentDate,
      appointmentTime: newData.appointmentTime,
      description: newData.description,
      prescriptionMedication: newData.prescriptionMedication,
      dosagePrecautions: newData.dosagePrecautions,
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

export const Appointment = {
  Store,
  GetID,
  Update,
  Delete,
};
