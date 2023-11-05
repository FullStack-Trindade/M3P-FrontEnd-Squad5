const API_ENDPOINT = `http://localhost:3000/{resource}`;

export const Get = () => {
  return localStorage.getItem("token");
};

export const Set = (token) => {
  localStorage.setItem("token", token);
  return Get() === token;
};

// const Auth = async (data) => {
//   return await fetch(API_ENDPOINT.replace("{resource}", "auth"), {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-Type": "application/json" },
//   });
// };

export const Logout = async () => {};
