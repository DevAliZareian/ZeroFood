import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useOrders() {
  const queryClient = useQueryClient();
  const { mutateAsync: submitOrders, isPending } = useMutation({
    mutationFn: (orders) => axios.post("/api/submit-order", { orders }),
    onSuccess: (newOrder) => {
      queryClient.setQueriesData(["orders"], newOrder);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
  return { submitOrders, isPending };
}
