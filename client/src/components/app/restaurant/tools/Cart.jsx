import React, { useRef } from "react";
import BasketProduct from "./BasketProduct";
import CartPrice from "./CartPrice";
import CartForm from "../interface/CartForm";
import { useBasket } from "../../../../contexts/BasketContext";
import SubmitOrder from "./SubmitOrder";
import DescriptionOrder from "./DescriptionOrder";

export default function Cart() {
  const { products, isPending } = useBasket();
  const description = useRef("");
  return (
    <CartForm products={products}>
      {products.map((product) => (
        <BasketProduct key={product.id} title={product.title} price={product.price} count={product.count} />
      ))}
      <CartPrice isPending={isPending} />
      <DescriptionOrder descriptionRef={description} />
      <SubmitOrder orders={products} description={description} />
    </CartForm>
  );
}
