import React from "react";
import { useBasket } from "../../../../contexts/BasketContext";

export default function AddToCart({ id, title, price }) {
  const { addProduct } = useBasket();
  return (
    <div className="mt-0 flex flex-col items-center">
      <button
        onClick={() => addProduct({ id: id, title: title, price: price })}
        className="h-[2.3125rem] text-[0.875rem] text-green-500 inline-flex items-center justify-center cursor-pointer transition-all min-w-[6.6875rem] w-auto border-[0.09375rem] border-solid border-[rgba(255,0,166,0.06)] rounded-[3rem] bg-white shadow-div"
        dir="rtl"
      >
        افزودن
      </button>
    </div>
  );
}
