import React from "react";
import { useOrders } from "../../../../contexts/OrdersContext";

export default function SubmitOrder({ orders }) {
  const { addOrder } = useOrders();
  return (
    <div className="sticky bottom-0 w-full h-[7.5rem] bg-white">
      <button
        onClick={() => addOrder(orders)}
        type="submit"
        className="mt-[1rem] mb-auto w-full min-w-[6.6875rem] p-2 h-12 inline-flex items-center justify-center text-center text-white bg-green-500 border-none cursor-pointer duration-[0.3s] overflow-hidden rounded-[0.375rem] text-[1.125rem] font-bold"
        dir="rtl"
      >
        ورود به حساب کاربری
      </button>
    </div>
  );
}
