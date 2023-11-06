import { axiosInstance } from "../helper/axiosInstance";

export const Get = () => {
  return localStorage.getItem("token");
};

export const Set = (token) => {
  localStorage.setItem("token", token);
  return Get() === token;
};

export const GetToken = async (data) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  return await axiosInstance
    .post(`${apiUrl}/usuarios/login`, data)
    .then((response) => {
      if (response.data.status == 401) {
        return null;
      } else {
        Set(response.data.access_token);
        return response.data.access_token;
      }
    })
    .catch((e) => console.log("token_fail :", e.message));
};

export const Logout = async () => {};
