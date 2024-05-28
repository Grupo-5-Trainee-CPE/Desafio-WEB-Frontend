import api from "./api";

export async function createUsuarios(newUser) {
  const { data } = await api.post(`/usuarios`, newUser);
  return data;
}

export async function checkLogin(login) {
  const { data } = await api.post(`/login`, login);
  return data;
}