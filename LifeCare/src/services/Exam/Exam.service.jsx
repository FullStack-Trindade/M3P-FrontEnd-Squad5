import { axiosInstance } from "../../helper/axiosInstance";

export const GetExams = async () => {
  try {
    const examData = await axiosInstance
      .get(`/exames`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return examData;
  } catch (error) {
    console.log(error);
  }
};

export const GetExamID = async (id) => {
  try {
    const examData = await axiosInstance
      .get(`/exames/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return examData;
  } catch (error) {
    console.log(error);
  }
};

export const StoreExam = async (newData) => {
  const data = {
    name: newData.name,
    examDate: newData.examDate,
    examTime: newData.examTime,
    examType: newData.examType,
    laboratory: newData.laboratory,
    documentURL: newData.documentURL,
    results: newData.results,
    patientId: newData.patientId,
    userId: newData.userId,
  };
  await axiosInstance
    .post(`/exames`, data, {
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
export const UpdateExam = async (id, newData) => {
  const data = {
    name: newData.name,
    examDate: newData.examDate,
    examTime: newData.examTime,
    examType: newData.examType,
    laboratory: newData.laboratory,
    documentURL: newData.documentURL,
    results: newData.results,
    patientId: newData.patientId,
    userId: newData.userId,
  };
  await axiosInstance
    .put(`/exames/${id}`, data, {
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
export const DeleteExam = async (id) => {
  await axiosInstance
    .delete(`/exames/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      alert("Deletado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao deletar ${err.message}`);
    });
};
