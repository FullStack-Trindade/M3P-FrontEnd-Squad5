import { axiosInstance } from "../../helper/axiosInstance";

export const GetPatient = async () => {
  try {
    const patientData = await axiosInstance
      .get(`/pacientes`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return patientData;
  } catch (error) {
    console.log(error);
  }
};

export const GetEmail = async (email) => {
  try {
    const patientData = await axiosInstance
      .get(`/pacientes?email=${email}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return patientData;
  } catch (error) {
    console.log(error);
  }
};

export const GetID = async (id) => {
  try {
    const patientData = await axiosInstance
      .get(`/pacientes/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return patientData;
  } catch (error) {
    console.log(error);
  }
};

export const StorePatient = async (newData) => {
  const data = {
    fullName: newData.fullName,
    gender: newData.gender,
    birthday: newData.birthday,
    cpf: newData.cpf,
    rg: newData.rg,
    civilStatus: newData.civilStatus,
    phoneNumber: newData.phoneNumber,
    emergencyContact: newData.emergencyContact,
    email: newData.email,
    nationality: newData.nationality,
    listOfAllergies: newData.listOfAllergies,
    specificCare: newData.specificCare,
    healthInsurance: newData.healthInsurance,
    insuranceNumber: newData.insuranceNumber,
    insuranceExpirationDate: newData.insuranceExpirationDate,
    systemStatus: true,
    userId: newData.userId,
    address: {
      zipCode: newData.cep,
      city: newData.city,
      state: newData.state,
      street: newData.place,
      number: newData.number,
      complement: newData.complement,
      neighborhood: newData.street,
      referencePoint: newData.referencePoint,
    },
  };
  await axiosInstance
    .post(`/pacientes`, data, {
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

export const Update = async (id, newData) => {
  console.log("ID", id);
  console.log("newData", newData);
  const data = {
    fullName: newData.fullName,
    gender: newData.gender,
    birthday: newData.birthday,
    cpf: newData.cpf,
    rg: newData.rg,
    civilStatus: newData.civilStatus,
    phoneNumber: newData.phoneNumber,
    emergencyContact: newData.emergencyContact,
    email: newData.email,
    nationality: newData.nationality,
    listOfAllergies: newData.listOfAllergies,
    specificCare: newData.specificCare,
    healthInsurance: newData.healthInsurance,
    insuranceNumber: newData.insuranceNumber,
    insuranceExpirationDate: newData.insuranceExpirationDate,
    systemStatus: true,
    userId: newData.userId,
    address: {
      zipCode: newData.cep,
      city: newData.city,
      state: newData.state,
      street: newData.place,
      number: newData.number,
      complement: newData.complement,
      neighborhood: newData.street,
      referencePoint: newData.referencePoint,
    },
  };

  console.log("DATA:", JSON.stringify(data));
  await axiosInstance
    .put(`/pacientes/${id}`, data, {
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

export const Delete = async (id) => {
  await axiosInstance
    .delete(`/pacientes/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      alert("Deletado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao deletar ${err.message}`);
    });
};
