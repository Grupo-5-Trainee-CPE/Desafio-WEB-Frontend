import { useMutation } from "@tanstack/react-query";
import { checkLogin } from "../../Services/api/endpoints";

export function useCheckLogin({
  onSuccess = () => {},
  onError = (err) => console.log(err),
} = {}) {
  return useMutation({
    mutationFn: checkLogin,
    onSuccess,
    onError,
  });
}
