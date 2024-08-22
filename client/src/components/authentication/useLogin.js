import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { usePopup } from "../../contexts/PopupContext";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setPopup } = usePopup();
  const { mutateAsync: login, isPending: isLoginPending } = useMutation({
    mutationFn: ({ code }) => loginApi({ code }),
    onSuccess: (user) => {
      setPopup((prevState) => ({ ...prevState, loginForm: false }));
      console.log(user);
      queryClient.setQueriesData(["user"], user.data);
      toast.success("خوش اومدی!");
      navigate("/explore", { replace: true });
    },
    onError: (error) => toast.error(error.message),
  });
  return { login, isLoginPending };
}
