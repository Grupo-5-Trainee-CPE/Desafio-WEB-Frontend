import { useMutation, useQuery } from "@tanstack/react-query";
import { createProjeto } from "../../Services/api/endpoints";

export function useCreateProjeto({
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: createProjeto,
    onSucess,
    onError,
  });
}
