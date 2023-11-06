import { axiosInstance } from "../../helper/axiosInstance";

export const GetMedicines = async () => {
  try {
    const medicineData = await axiosInstance
      .get(`/medicamentos`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return medicineData;
  } catch (error) {
    console.log(error);
  }
};

export const GetMedicineID = async (id) => {
  try {
    const medicineData = await axiosInstance
      .get(`/medicamentos/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return medicineData;
  } catch (error) {
    console.log(error);
  }
};

export const StoreMedicine = async (newData) => {
  const data = {
    name: newData.name,
    date: newData.date,
    time: newData.time,
    medicineType: newData.medicineType,
    amount: newData.amount,
    unit: newData.unit,
    comments: newData.comments,
    patientId: newData.patientId,
    userId: newData.userId,
  };
  await axiosInstance
    .post(`/medicamentos`, data, {
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
export const UpdateMedicine = async (id, newData) => {
  const data = {
    name: newData.name,
    date: newData.date,
    time: newData.time,
    medicineType: newData.medicineType,
    amount: newData.amount,
    unit: newData.unit,
    comments: newData.comments,
    patientId: newData.patientId,
    userId: newData.userId,
  };
  await axiosInstance
    .put(`/medicamentos/${id}`, data, {
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
export const DeleteMedicine = async (id) => {
  await axiosInstance
    .delete(`/medicamentos/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      alert("Deletado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao deletar ${err.message}`);
    });
};
