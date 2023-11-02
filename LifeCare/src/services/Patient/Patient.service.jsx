import axios from "axios";
import { axiosInstance } from "../../helper/axiosInstance";

let API_URL = "http://localhost:3333/api/pacientes";

const Get = async () => {
  const patientData = await axios.get(API_URL);
  return patientData.data.data;
};

const GetEmail = async (email) => {
  const patientData = await axios.get(`${API_URL}?email=${email}`);
  return patientData.data.data;
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

const Store = async (newData) => {
  axios
    .post(API_URL, {
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
      systemStatus: true,
      healthInsurance: newData.healthInsurance,
      insuranceNumber: newData.insuranceNumber,
      insuranceExpirationDate: newData.insuranceExpirationDate,
      address: {
        zipCode: newData.zipCode,
        city: newData.city,
        state: newData.state,
        street: newData.street,
        number: newData.number,
        complement: newData.complement,
        neighborhood: newData.neighborhood,
        referencePoint: newData.referencePoint,
      },
      userId: newData.userId,
    })
    .then((res) => {
      alert("Cadastrado com sucesso");
    })
    .catch((err) => {
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

export const Patient = {
  Store,
  Get,
  GetID,
  GetEmail,
  Update,
  Delete,
};
