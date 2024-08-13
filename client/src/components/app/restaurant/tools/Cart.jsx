import React from "react";
import BasketProduct from "./BasketProduct";
import CartPrice from "./CartPrice";
import CartForm from "../interface/CartForm";
import { useBasket } from "../../../../contexts/BasketContext";
import SubmitOrder from "./SubmitOrder";
import DescriptionOrder from "./DescriptionOrder";

export default function Cart() {
  const { products, isPending } = useBasket();
  return (
    <CartForm>
      {products.map((product) => (
        <BasketProduct key={product.id} title={product.title} price={product.price} />
      ))}
      <CartPrice isPending={isPending} />
      <DescriptionOrder />
      <SubmitOrder orders={products} />
    </CartForm>
  );
}
