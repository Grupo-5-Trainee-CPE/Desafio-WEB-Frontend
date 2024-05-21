import api from "./api";

export async function createUsuarios() {
  const { data } = await api.post(`/usuarios`);
  return data;
}
