import axios from "axios";

let API_URL = "http://localhost:3333/api/consultas";

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

export const Appointment = {
  Store,
};
