import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: login, isPending } = useMutation({
    mutationFn: ({ email }) => loginApi({ email }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      toast.success("خوش اومدی!");
      navigate("/explore", { replace: true });
    },
    onError: (error) => toast.error(error.message),
  });
  return { login, isPending };
}
