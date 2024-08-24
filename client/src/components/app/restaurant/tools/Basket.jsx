import React from "react";
import Delivery from "../interface/Delivery";
import Cart from "./Cart";
import BasketAside from "../interface/BasketAside";
import EmptyCart from "../tools/EmptyCart";

import { useBasket } from "../../../../contexts/BasketContext";

export default function Basket({ delivery }) {
  const { products } = useBasket();
  return (
    <BasketAside>
      <Delivery delivery={delivery} />
      {!products || products.length === 0 ? <EmptyCart /> : <Cart />}
    </BasketAside>
  );
}
