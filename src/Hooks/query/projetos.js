import { useMutation, useQuery } from "@tanstack/react-query";
import { createProjeto, readProjeto } from "../../Services/api/endpoints";

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

export function useGetProjeto({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useQuery({
    queryKey: ["projeto"],
    queryFn: readProjeto,
    onSuccess,
    onError,
  });
}
