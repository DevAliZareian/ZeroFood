import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const queryClient = useQueryClient();

  const { mutateAsync: updateBasket, isPending } = useMutation({
    mutationFn: (products) => axios.post("/api/update-basket", { products: products.id }),
    onSuccess: (updatedProducts) => {
      queryClient.setQueriesData(["basket"], updatedProducts);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
  const { mutateAsync: changeAmount } = useMutation({
    mutationFn: (id, action) => axios.post(`/api/${action}`, { id: id }),
    onSuccess: (updatedProducts) => {
      queryClient.setQueriesData(["basket"], updatedProducts);
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  const addProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    updateBasket(updatedProducts);
  };

  return <BasketContext.Provider value={{ products, addProduct, changeAmount, isPending }}>{children}</BasketContext.Provider>;
};
