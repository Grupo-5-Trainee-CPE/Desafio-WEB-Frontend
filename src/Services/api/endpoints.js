import staticMethods from "antd/es/message";
import useAuthStore from "../../../Stores/auth";
import api from "./api";

export async function createUsuarios(newUser) {
  const { data } = await api.post(`/usuarios`, newUser);
  return data;
}

export async function checkLogin(login) {
  const {setToken} = useAuthStore.getState();

  const { data } = await api.post(`/login`, login);
  console.log('data', data);
  setToken(data.token);

  return data;
}
