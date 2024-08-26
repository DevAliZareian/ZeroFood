import React from "react";
import AddToCart from "../tools/AddToCart";
import { useBasket } from "../../../../contexts/BasketContext";
import ChangeAmount from "../tools/ChangeAmount";

export default function Food({ id, title, picture, description, price }) {
  const basket = useBasket();
  return (
    <div className="w-full basis-[50%] max-w-[50%] border-b-[0.0625rem] border-l-[0.0625rem] border-solid border-[rgb(235,237,240)]">
      <section className="h-full pt-[1rem] pb-[1rem] pr-0 pl-0 flex flex-col justify-between">
        <div className="pt-0 pb-0 pr-[1rem] pl-[1rem] cursor-pointer flex justify-between items-center">
          <div className="flex flex-col pt-[1rem] pl-[1rem]">
            <h2 className="font-bold text-[1rem] text-[rgb(58,61,66)]">{title}</h2>
            <strong className="mt-[0.5rem] break-words text-[0.75rem] text-[rgb(166,170,173)]">{description}</strong>
          </div>
          <div className="relative shrink-0">
            <img className="rounded-[0.5rem] border-none" alt={title} src={picture ? picture : "https://snappfood.ir/static/images/placeholder.png"} loading="lazy" width="112" height="112" />
          </div>
        </div>
        <div className="flex flex-col">
          <footer className="mt-[0.5rem] flex items-center justify-between">
            <div className="pt-0 pb-0 pr-[0.75rem] pl-[0.75rem] w-full min-h-[3.5625rem] flex items-center justify-between">
              <div className="flex flex-col">
                <div className="inline-flex flex-col">
                  <div className="flex items-center">
                    <div className="inline-flex flex-col items-start">
                      <span className="font-bold text-[0.875rem] text-[rgb(58,61,66)]">
                        {price} <span className="text-[0.75rem] text-[rgb(83,86,92)]">تومان</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {basket.basket.cart?.some((product) => product.product.id === id) ? <ChangeAmount product={id} /> : <AddToCart id={id} title={title} price={price} />}
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
