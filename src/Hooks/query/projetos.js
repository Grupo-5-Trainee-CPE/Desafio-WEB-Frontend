import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createProjeto,
  deleteProjeto,
  readProjeto,
  updateProjeto,
} from "../../Services/api/endpoints";

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

export function useDeleteProjeto({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: deleteProjeto,
    onSuccess,
    onError,
  });
}

export function useUpdateProjeto({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: updateProjeto,
    onSuccess,
    onError,
  });
}
