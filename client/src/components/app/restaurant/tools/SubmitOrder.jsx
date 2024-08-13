import React from "react";
import Loading from "react-loading";

import { useOrders } from "../useOrders";
import { usePopup } from "../../../../contexts/PopupContext";
import { useUser } from "../../../../contexts/UserContext";

export default function SubmitOrder({ orders, description }) {
  const { setPopup } = usePopup();
  const { submitOrders, isPending } = useOrders();
  const { user } = useUser();
  return (
    <>
      {user ? (
        <div className="sticky bottom-0 w-full h-[7.5rem] bg-white">
          <button
            onClick={() => submitOrders({ orders: orders, description: description })}
            type="submit"
            className="mt-[1rem] mb-auto w-full min-w-[6.6875rem] p-2 h-12 inline-flex items-center justify-center text-center text-white bg-green-500 border-none cursor-pointer duration-[0.3s] overflow-hidden rounded-[0.375rem] text-[1.125rem] font-bold"
            dir="rtl"
          >
            {isPending ? <Loading type={"bubbles"} /> : "ثبت سفارش"}
          </button>
        </div>
      ) : (
        <div className="sticky bottom-0 w-full h-[7.5rem] bg-white">
          <button
            onClick={() => {
              setPopup((prevState) => ({ ...prevState, loginForm: true }));
            }}
            type="submit"
            className="mt-[1rem] mb-auto w-full min-w-[6.6875rem] p-2 h-12 inline-flex items-center justify-center text-center text-white bg-green-500 border-none cursor-pointer duration-[0.3s] overflow-hidden rounded-[0.375rem] text-[1.125rem] font-bold"
            dir="rtl"
          >
            ورود به حساب کاربری
          </button>
        </div>
      )}
    </>
  );
}
