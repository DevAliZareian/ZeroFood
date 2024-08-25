import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BASE_URL, UserToken } from "../utils/constants";
import { fetchBasket } from "../services/apiData";

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const queryClient = useQueryClient();

  const { data: basket, refetch } = useQuery({
    queryKey: ["basket"],
    queryFn: fetchBasket,
    enabled: !!localStorage.getItem("accessToken"),
  });

  useEffect(() => {
    const cartItems = basket?.cart.map((item) => ({
      title: item.product.title,
      price: item.product.price,
      count: item.count,
      description: item.product.description,
      picture: item.product.picture,
    }));
    setProducts(cartItems);
  }, [basket]);

  const { mutateAsync: updateBasket, isPending } = useMutation({
    mutationFn: (product) => axios.post(`${BASE_URL}/cart/add`, { productId: product.id }, UserToken),
    onSuccess: () => {
      refetch();
      console.log(products);
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
    if (products) {
      const updatedProducts = [...products, product];
      setProducts(updatedProducts);
    } else {
      setProducts([product]);
    }
    updateBasket(product);
  };

  return <BasketContext.Provider value={{ basket, products, addProduct, changeAmount, isPending }}>{children}</BasketContext.Provider>;
};
