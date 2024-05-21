import api from "./api";

export async function createUsuarios(newUser) {
  const { data } = await api.post(`/usuarios`, newUser);
  return data;
}
