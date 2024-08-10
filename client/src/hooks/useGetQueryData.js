import { useQueryClient } from "@tanstack/react-query";

export function useGetQueryData(key) {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([key]);
}
