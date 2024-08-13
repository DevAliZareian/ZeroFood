import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const OrdersContext = createContext();

export const useOrders = () => useContext(OrdersContext);

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
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

  const addOrder = (newOrder) => {
    const newOrders = [...orders, newOrder];
    setOrders(newOrders);
    submitOrders(newOrders);
  };

  return <OrdersContext.Provider value={{ orders, addOrder, isPending }}>{children}</OrdersContext.Provider>;
};
