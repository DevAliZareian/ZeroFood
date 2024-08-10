import { useQuery } from "@tanstack/react-query";
import fetchData from "../services/apiData";

export const useFetchDataOnLoad = (url, key) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => fetchData(url),
    refetchOnWindowFocus: false, // Prevent refetching when the window is focused
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Unused data will be garbage collected after 10 minutes
  });
};
