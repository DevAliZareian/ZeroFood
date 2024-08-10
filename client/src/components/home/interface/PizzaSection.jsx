import React from "react";
import LoginBtn from "../../../components/global/LoginBtn";
import Logo from "../../../components/environment/Logo";
import { usePopup } from "../../../contexts/PopupContext";
export default function PizzaSection() {
  const { setPopup } = usePopup();
  return (
    <div className="reletive overflow-hidden h-[44rem] p-8 m-0 bg-gray-50 flex flex-col items-start justify-start rounded-br-[0.75rem]-[7.5rem]">
      <div className="absolute top-[9.375rem] left-0 w-[50%] h-[85%] ml-2 mt-[-1.5rem]">
        <img className="border-none" src="https://snappfood.ir/static/images/hero-image.png" alt="" />
      </div>
      <div className="flex w-full items-center justify-between mb-[12.125rem]">
        <Logo />
        <LoginBtn />
      </div>
      <div className="flex items-start justify-between gap-2 flex-col">
        <h2 className="text-5xl font-normal">
          سفارش آنلاین <span className="text-green-500">غذا</span>
        </h2>
        <p className="text-[0.875rem] font-normal text-stone-600">سفارش آنلاین غذا ، میوه، نان، شیرینی و ...</p>
        <div
          onClick={() => {
            setPopup((prevState) => ({ ...prevState, Map: true }));
          }}
          className="flex items-center justify-between cursor-pointer w-[60vw] min-w-[16.875rem] max-w-[50%] h-14 mt-[1.75rem] rounded-[5rem] bg-white shadow-div"
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="mr-[1.1875rem]" width="17" height="20" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.11216 9.2305C10.8115 7.50007 10.8115 4.7073 9.11216 2.97687C7.39661 1.22993 4.60338 1.22993 2.88783 2.97687C1.18849 4.7073 1.18849 7.50007 2.88783 9.2305L5.89303 12.2907C5.91798 12.3161 5.95396 12.3333 5.99999 12.3333C6.04603 12.3333 6.08201 12.3161 6.10696 12.2907L9.11216 9.2305ZM10.0069 10.1839C12.2199 7.93048 12.2199 4.27689 10.0069 2.02343C7.79396 -0.230038 4.20603 -0.230038 1.99306 2.02343C-0.219915 4.27689 -0.219915 7.93048 1.99306 10.1839L4.99826 13.2441C5.5515 13.8075 6.44849 13.8075 7.00173 13.2441L10.0069 10.1839Z"
                fill="var(--sf-inactive-dark)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.99999 4.89127C5.29867 4.89127 4.77999 5.46244 4.77999 6.10368C4.77999 6.74492 5.29867 7.3161 5.99999 7.3161C6.70132 7.3161 7.22 6.74492 7.22 6.10368C7.22 5.46244 6.70132 4.89127 5.99999 4.89127ZM5.99999 3.55794C4.61928 3.55794 3.49999 4.69771 3.49999 6.10368C3.49999 7.50966 4.61928 8.64943 5.99999 8.64943C7.38071 8.64943 8.5 7.50966 8.5 6.10368C8.5 4.69771 7.38071 3.55794 5.99999 3.55794Z"
                fill="var(--sf-inactive-dark)"
              ></path>
            </svg>
            <p className="text-[0.875rem] font-normal text-stone-600 text-center">ابتدا آدرستان را انتخاب کنید.</p>
          </div>
          <button className="ml-[0.25rem] inline-flex items-center justify-center min-w-[auto] w-12 h-12 border-[0.09375rem] rounded-[50%] text-white bg-green-500 shadow text-[1.125rem] font-bold">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="var(--sf-accent-overlay)">
              <path d="M7.75008 0.666016C11.6621 0.666016 14.8334 3.83733 14.8334 7.74935C14.8334 9.40479 14.2655 10.9276 13.3139 12.1336L16.5477 15.3684C16.8731 15.6939 16.8731 16.2215 16.5477 16.5469C16.2222 16.8724 15.6946 16.8724 15.3692 16.5469L12.1343 13.3132C10.9283 14.2648 9.40552 14.8327 7.75008 14.8327C3.83806 14.8327 0.666748 11.6614 0.666748 7.74935C0.666748 3.83733 3.83806 0.666016 7.75008 0.666016ZM7.75008 2.33268C4.75854 2.33268 2.33341 4.75781 2.33341 7.74935C2.33341 10.7409 4.75854 13.166 7.75008 13.166C10.7416 13.166 13.1667 10.7409 13.1667 7.74935C13.1667 4.75781 10.7416 2.33268 7.75008 2.33268Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
