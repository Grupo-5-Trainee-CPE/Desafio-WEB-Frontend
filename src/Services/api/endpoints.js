import useAuthStore from "../../../Stores/auth";
import api from "./api";

export async function createUsuarios(newUser) {
  const { data } = await api.post(`/usuarios`, newUser);
  return data;
}

export async function checkLogin(login) {
  const { setAuth } = useAuthStore.getState();

  const { data } = await api.post(`/login`, login);
  setAuth(data.token);

  return data;
}
