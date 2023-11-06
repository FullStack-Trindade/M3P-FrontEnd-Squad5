import { axiosInstance } from "../../helper/axiosInstance";

export const GetExercise = async () => {
  try {
    const exerciseData = await axiosInstance
      .get(`/exercicios`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return exerciseData;
  } catch (error) {
    console.log(error);
  }
};

export const GetExerciseID = async (id) => {
  try {
    const exerciseData = await axiosInstance
      .get(`/exercicios/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return exerciseData;
  } catch (error) {
    console.log(error);
  }
};

export const StoreExercise = async (newData) => {
  const data = {
    exerciseName: newData.exerciseName,
    date: newData.date,
    time: newData.time,
    exerciseType: newData.exerciseType,
    quantityPerWeek: newData.quantityPerWeek,
    description: newData.description,
    patientId: newData.patientId,
    userId: newData.userId,
  };
  await axiosInstance
    .post(`/exercicios`, data, {
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
export const UpdateExercise = async (id, newData) => {
  const data = {
    exerciseName: newData.exerciseName,
    date: newData.date,
    time: newData.time,
    exerciseType: newData.exerciseType,
    quantityPerWeek: newData.quantityPerWeek,
    description: newData.description,
    patientId: newData.patientId,
    userId: newData.userId,
  };
  await axiosInstance
    .put(`/exercicios/${id}`, data, {
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
export const DeleteExercise = async (id) => {
  await axiosInstance
    .delete(`/exercicios/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      alert("Deletado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao deletar ${err.message}`);
    });
};
