import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import { getUserData } from "../services/apiAuth";

const UserContext = createContext();

export const usePerson = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
    enabled: !!localStorage.getItem("accessToken"),
    staleTime: Infinity,
    retry: false,
    refetchOnWindowFocus: false,
    onError: (error) => {
      console.error("Failed to fetch user data:", error);
    },
  });
  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};
