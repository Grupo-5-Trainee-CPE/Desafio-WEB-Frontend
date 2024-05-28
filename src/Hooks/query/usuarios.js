import { useMutation, useQuery } from "@tanstack/react-query";
import { createUsuarios } from "../../Services/api/endpoints";

export function useCreateUsuarios({
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createUsuarios,
    onSucess,
    onError,
  });
}
