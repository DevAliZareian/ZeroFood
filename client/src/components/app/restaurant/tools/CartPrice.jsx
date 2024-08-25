import React from "react";
import IsPending from "../../../global/IsPending";
import { useGetQueryData } from "../../../../hooks/useGetQueryData";
import { useBasket } from "../../../../contexts/BasketContext";
export default function CartPrice({ isPending }) {
  const basket = useBasket();
  console.log(basket);
  return (
    <>
      {isPending || !basket ? (
        <IsPending />
      ) : (
        <>
          <div className="flex flex-col border-b border-solid border-[rgba(58,61,66,0.06)]">
            <div className="flex items-center justify-between h-[2rem]">
              <div className="flex items-center">
                <span className="text-[0.875rem] text-[rgb(58,61,66)]">مجموع</span>
              </div>
              <div className="inline-flex flex-col">
                <div className="inline-flex items-center">
                  <div className="inline-flex flex-col items-start">
                    <span className="text-[0.875rem] text-[rgb(58,61,66)]">
                      {basket.basket?.totalPrice} <span className="text-[0.75rem] text-[rgb(83,86,92)]">تومان</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between h-[2rem]">
              <div className="flex items-center">
                <span className="text-[0.875rem] text-[rgb(58,61,66)]">هزینه بسته‌بندی</span>
              </div>
              <div className="inline-flex flex-col">
                <div className="inline-flex items-center">
                  <div className="inline-flex flex-col items-start">
                    <span className="text-[0.875rem] text-[rgb(58,61,66)]">
                      ۲,۰۰۰ <span className="text-[0.75rem] text-[rgb(83,86,92)]">تومان</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between h-[3rem]">
            <p className="font-bold text-[0.875rem] text-[rgb(58,61,66)]">قابل پرداخت</p>
            <div className="inline-flex flex-col">
              <div className="inline-flex items-center">
                <div className="inline-flex flex-col items-start">
                  <span className="font-bold text-[0.875rem] text-[rgb(58,61,66)]">
                    12000 <span className="text-[0.75rem] text-[rgb(83,86,92)]">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
