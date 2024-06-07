import staticMethods from "antd/es/message";
import useAuthStore from "../../../Stores/auth";
import Projeto from "../../Pages/Projeto/Projeto";
import api from "./api";

export async function createUsuarios(newUser) {
  const { data } = await api.post(`/usuarios`, newUser);
  return data;
}

export async function checkLogin(login) {
  const { setToken } = useAuthStore.getState();

  const { data } = await api.post(`/login`, login);
  setToken(data.token);

  return data;
}

export async function createProjeto(newProject) {
  const { data } = await api.post(`/projetos`, newProject);
  return data;
}

export async function readProjeto() {
  const { data } = await api.get(`/projetos`);
  return data;
}

export async function deleteProjeto(_id) {
  const { data } = await api.delete(`/projetos/${_id}`);
  return data;
}

export async function updateProjeto({ _id, body }) {
  const { data } = await api.put(`/projetos/${_id}`, body);
  return data;
}
