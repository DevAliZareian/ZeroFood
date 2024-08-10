import React from "react";
import { Link } from "react-router-dom";

export default function Restaurant({ id, title, logo, banner, avgScore, totalScore, category, delivery }) {
  return (
    <Link to={`/restaurant/menu/${id}`} className="max-w-[33.3333%] basis-[33.3333%]">
      <div className="hover:scale-105 transition-all flex flex-col justify-between h-full mb-[2rem] pb-[1.5rem] overflow-hidden bg-white border border-[rgba(58,61,66,0.06)] border-solid cursor-pointer p-0 shadow-div rounded-[0.5rem] text-[rgb(58,61,66)]">
        <div className="relative h-[9.6875rem] min-h-[9.6875rem] max-h-[9.6875rem] shrink-0 flex items-center justify-center">
          <img className="w-full h-full object-cover border-none" alt={title} src={banner ? banner : "https://snappfood.ir/static/images/placeholder.png"} loading="lazy" />
          <div className="absolute right-0 left-0 bottom-0 m-auto translate-y-[1.25rem] w-[5.5rem] h-[5.5rem] bg-white rounded-[0.75rem] shadow-div flex items-center justify-center">
            <img
              className="border border-solid border-[rgba(58,61,66,0.06)] rounded-[0.75rem]"
              alt={title}
              src={logo ? logo : "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/6697e27743e3c.jpg"}
              width="80"
              height="80"
            />
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <h2 className="max-w-full mb-[0.5rem] overflow-hidden font-bold text-[1.125rem]">{title}</h2>
            <div className="mb-[0.5rem]">
              <div className="ml-[0.5rem] flex items-center justify-center">
                <span className="ml-[0.5rem] flex items-center justify-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="#FFCE00">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.99984 9.62097L2.42572 11.5L3.10832 7.52016L0.216797 4.70163L4.21278 4.12098L5.99984 0.5L7.7869 4.12098L11.7829 4.70163L8.89136 7.52016L9.57395 11.5L5.99984 9.62097Z"
                    ></path>
                  </svg>
                  <span className="font-bold text-[0.75rem] text-[rgb(58,61,66)]">{avgScore ? avgScore : "جدید"}</span>
                </span>
                <p className="text-[0.75rem] text-[rgb(166,170,173)]">{totalScore ? `(${totalScore}) امتیاز` : null}</p>
              </div>
            </div>
            <h3 className="mb-[0.75rem] text-[0.75rem] text-[rgb(166,170,173)]">{category ? category : "ایرانی"}</h3>
          </div>
          <footer className="flex items-center justify-center">
            <div className="pt-[0.6875rem] pb-[0.6875rem] pl-[0.875rem] pr-[0.875rem] bg-white rounded-[4.5rem] shadow-div text-center">
              <div className="flex items-center justify-center">
                <svg className="ml-[0.5rem]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#A3A3A3">
                  <path
                    fill-rule="nonzero"
                    d="M11.868.35c3.638 0 6.35 2.742 6.682 6.386.668.429 1.05.918 1.05 1.418H18.56a10.722 10.722 0 0 1-1.123 4.067l5.32 3.208v8.216H1.24v-8.216l5.119-3.087a10.72 10.72 0 0 1-1.186-4.188H4.135c0-.5.382-.989 1.05-1.42C5.515 3.093 8.228.35 11.867.35zm4.529 13.508c-1.187 1.497-2.77 2.486-4.53 2.486-1.716 0-3.266-.942-4.443-2.38l-4.244 2.56v5.18h2.94v-1.607l2.063-1.94h7.514l2.063 1.94v1.607h3.058v-5.18l-4.421-2.666zm-.577 6.239H8.06v1.607h7.76v-1.607zm.796-11.942H7.119c.272 3.17 2.437 6.25 4.749 6.25 2.31 0 4.476-3.08 4.748-6.25zM11.868 2.29c-2.225 0-3.957 1.431-4.554 3.54 1.278-.363 2.851-.586 4.553-.586s3.275.223 4.552.587c-.595-2.11-2.328-3.541-4.551-3.541z"
                  ></path>
                </svg>
                <p className="ml-[0.5rem] text-[0.75rem]">پیک فروشنده</p>
                <div className="mr-[0.5rem] inline-flex flex-col items-center">
                  <div className="inline-flex items-center">
                    <div className="inline-flex flex-col items-start">
                      <span className="font-bold text-[0.75rem] text-[rgb(58,61,66)]">
                        {delivery} <span className="text-[0.75rem] text-[rgb(58,61,66)]">{delivery ? "تومان" : "رایگان"}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Link>
  );
}
