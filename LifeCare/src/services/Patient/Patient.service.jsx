import axios from "axios";

let API_URL = "http://localhost:3333/api/pacientes";

const Get = async () => {
  const patientData = await axios.get(API_URL);
  return patientData.data.data;
};

const GetEmail = async (email) => {
  const patientData = await axios.get(`${API_URL}?email=${email}`);
  return patientData.data.data;
};

const GetID = async (id) => {
  const patientData = await axios.get(`${API_URL}/${id}`);
  return patientData.data.data;
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
const Update = async (id, newData) => {
  axios
    .put(`${API_URL}/${id}`, {
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

export const Patient = {
  Store,
  Get,
  GetID,
  GetEmail,
  Update,
  Delete,
};
