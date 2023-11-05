import { axiosInstance } from "../../helper/axiosInstance";

export const GetThemes = async () => {
  try {
    const themeData = await axiosInstance
      .get(`/configuracao`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return themeData;
  } catch (error) {
    console.log(error);
  }
};

export const GetThemeID = async (id) => {
  try {
    const themeData = await axiosInstance
      .get(`/configuracao/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((r) => {
        return r.data;
      })
      .catch((e) => console.log(e));

    return themeData;
  } catch (error) {
    console.log(error);
  }
};

export const StoreTheme = async (newData) => {
  const data = {
    primaryColor: newData.primaryColor,
    secondaryColor: newData.secondaryColor,
    primaryTextColor: newData.primaryTextColor,
    secondaryTextColor: newData.secondaryColor,
    companyName: newData.companyName,
    slogan: newData.slogan,
    logo: newData.logoURL,
    userId: newData.userId,
  };
  await axiosInstance
    .post(`/configuracao`, data, {
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
export const UpdateTheme = async (id, newData) => {
  const data = {
    primaryColor: newData.primaryColor,
    secondaryColor: newData.secondaryColor,
    primaryTextColor: newData.primaryTextColor,
    secondaryTextColor: newData.secondaryColor,
    companyName: newData.companyName,
    slogan: newData.slogan,
    logo: newData.logoURL,
    userId: newData.userId,
  };
  await axiosInstance
    .put(`/configuracao/${id}`, data, {
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
export const DeleteTheme = async (id) => {
  await axiosInstance
    .delete(`/configuracao/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      alert("Deletado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao deletar ${err.message}`);
    });
};
