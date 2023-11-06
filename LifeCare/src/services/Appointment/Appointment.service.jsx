import { axiosInstance } from "../../helper/axiosInstance";

export const GetAppointment = async () => {
  try {
    const appointmentData = await axiosInstance
      .get(`/consultas`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return appointmentData;
  } catch (error) {
    console.log(error);
  }
};

export const GetAppointmentID = async (id) => {
  try {
    const appointmentData = await axiosInstance
      .get(`/consultas/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return appointmentData;
  } catch (error) {
    console.log(error);
  }
};

export const StoreAppointment = async (newData) => {
  const data = {
    appointmentReason: newData.appointmentReason,
    appointmentDate: newData.appointmentDate,
    appointmentTime: newData.appointmentTime,
    description: newData.description,
    prescriptionMedication: newData.prescriptionMedication,
    dosagePrecautions: newData.dosagePrecautions,
    patientId: newData.patientId,
    userId: newData.userId,
  };
  await axiosInstance
    .post(`/consultas`, data, {
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
export const UpdateAppointment = async (id, newData) => {
  const data = {
    appointmentReason: newData.appointmentReason,
    appointmentDate: newData.appointmentDate,
    appointmentTime: newData.appointmentTime,
    description: newData.description,
    prescriptionMedication: newData.prescriptionMedication,
    dosagePrecautions: newData.dosagePrecautions,
    patientId: newData.patientId,
    userId: newData.userId,
  };
  await axiosInstance
    .put(`/consultas/${id}`, data, {
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
export const DeleteAppointment = async (id) => {
  await axiosInstance
    .delete(`/consultas/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      alert("Deletado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao deletar ${err.message}`);
    });
};
