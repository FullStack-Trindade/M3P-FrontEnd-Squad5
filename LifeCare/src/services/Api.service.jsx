import { getLocalStorage, setLocalStorage } from "./LocalStorage.service";

const GetUsers = () => {
  return getLocalStorage("users") || [];
};

const CreateUser = (data) => {
  const users = GetUsers() || [];

  data = {
    id: users?.length || 0 + 1,
    ...data,
  };

  setLocalStorage("users", [...users, data]);
};

const ShowUserByEmail = (email) => {
  return GetUsers().find((user) => user.email === email);
};

export const ApiService = {
  GetUsers,
  CreateUser,
  ShowUserByEmail,
};
