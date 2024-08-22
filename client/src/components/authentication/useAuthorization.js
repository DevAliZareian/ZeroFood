import { authorization as authorizationApi } from "../../services/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAuthorization(setAuthCode) {
  const { mutateAsync: authorization, isPending: isAuthorizationPending } = useMutation({
    mutationFn: ({ email }) => authorizationApi({ email }),
    onSuccess: (code) => {
      setAuthCode(true);
      console.log(code);
    },
    onError: (error) => toast.error(error.message),
  });
  return { authorization, isAuthorizationPending };
}
