import { useMutation, useQuery } from "@tanstack/react-query";
import { checkLogin } from "../../Services/api/endpoints";

export function usecheckLogin({
  onSucess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: checkLogin,
    onSucess,
    onError,
  });
}
