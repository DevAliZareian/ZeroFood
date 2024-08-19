import React from "react";

export default function PersonalInformation() {
  return (
    <div className="flex flex-col w-full overflow-y-auto bg-white border-[0.0625rem] border-solid border-[rgba(58,61,66,0.06)] rounded-[0.75rem] shadow-div">
      <div className="flex items-center justify-start p-[1rem]">
        <p className="font-bold text-[1rem] text-[rgb(83,86,92)]">حساب کاربری</p>
      </div>
      <div className="p-[0.875rem] flex">
        <div className="flex flex-col items-start justify-between grow mb-[1rem] p-[1rem]">
          <div className="flex mb-[0.875rem] cursor-pointer">
            <p className="text-[#A6AAAD] text-[0.875rem]">نام و نام خانوادگی</p>
          </div>
          <span className="font-bold text[1.125rem] text[rgb(58,61,66)]">علی زارعیان</span>
        </div>
        <div className="flex flex-col grow mb-[1rem] p-[1rem]">
          <div className="flex cursor-pointer mb-[0.875rem]">
            <p className="text-[#A6AAAD] text-[0.875rem]">ایمیل</p>
          </div>
          <span className="font-bold text[0.875rem] text[rgb(58,61,66)]"></span>
        </div>
      </div>
      <div className="flex flex-col pt-0 pr-[1rem] pb-[1rem] pl-[1rem]">
        <button
          className="w-fit mt-[1.25rem] inline-flex items-center justify-center cursor-pointer transition-all min-w-[6.6875rem] h-[2.5rem] text-green-500 text-[1rem] font-bold bg-transparent"
          dir="rtl"
        >
          <svg className="mr-[0.6rem] ml-[0.375rem]" width="13px" height="13px" viewBox="0 0 20 20" fill="#00B862" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1.99999C9.55228 1.99999 10 2.4477 10 2.99999C10 3.55227 9.55228 3.99999 9 3.99999H3C2.55291 3.99999 2 4.5529 2 4.99999V17.1905C2 17.6376 2.36244 18 2.80952 18H15C15.4471 18 16 17.4471 16 17V11C16 10.4477 16.4477 9.99999 17 9.99999C17.5523 9.99999 18 10.4477 18 11V17C18 18.5516 16.5517 20 15 20H2.80952C1.25787 20 0 18.7421 0 17.1905V4.99999C0 3.44833 1.44834 1.99999 3 1.99999H9ZM8.53637 12.7637L16.9358 4.36431C17.2948 4.0053 17.2948 3.42324 16.9358 3.06424C16.5767 2.70523 15.9947 2.70523 15.6357 3.06424L7.2363 11.4636L6.80294 13.197L8.53637 12.7637ZM18.35 1.65002C19.49 2.79008 19.49 4.63847 18.35 5.77852L9.75473 14.3738C9.62657 14.5019 9.46599 14.5928 9.29015 14.6368L5.67111 15.5416C4.93873 15.7247 4.27533 15.0613 4.45843 14.3289L5.36319 10.7098C5.40715 10.534 5.49807 10.3734 5.62623 10.2453L14.2215 1.65002C15.3615 0.50997 17.2099 0.50997 18.35 1.65002Z"></path>
          </svg>
          تغییر اطلاعات کاربر
        </button>
        <button
          className="w-fit mt-[1.25rem] inline-flex items-center justify-center cursor-pointer transition-all min-w-[6.6875rem] h-[2.5rem] text-green-500 text-[1rem] font-bold bg-transparent"
          dir="rtl"
        >
          <svg className="mr-[0.6rem] ml-[0.375rem]" width="13px" height="13px" viewBox="0 0 20 20" fill="#00B862" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1.99999C9.55228 1.99999 10 2.4477 10 2.99999C10 3.55227 9.55228 3.99999 9 3.99999H3C2.55291 3.99999 2 4.5529 2 4.99999V17.1905C2 17.6376 2.36244 18 2.80952 18H15C15.4471 18 16 17.4471 16 17V11C16 10.4477 16.4477 9.99999 17 9.99999C17.5523 9.99999 18 10.4477 18 11V17C18 18.5516 16.5517 20 15 20H2.80952C1.25787 20 0 18.7421 0 17.1905V4.99999C0 3.44833 1.44834 1.99999 3 1.99999H9ZM8.53637 12.7637L16.9358 4.36431C17.2948 4.0053 17.2948 3.42324 16.9358 3.06424C16.5767 2.70523 15.9947 2.70523 15.6357 3.06424L7.2363 11.4636L6.80294 13.197L8.53637 12.7637ZM18.35 1.65002C19.49 2.79008 19.49 4.63847 18.35 5.77852L9.75473 14.3738C9.62657 14.5019 9.46599 14.5928 9.29015 14.6368L5.67111 15.5416C4.93873 15.7247 4.27533 15.0613 4.45843 14.3289L5.36319 10.7098C5.40715 10.534 5.49807 10.3734 5.62623 10.2453L14.2215 1.65002C15.3615 0.50997 17.2099 0.50997 18.35 1.65002Z"></path>
          </svg>
          تغییر رمزعبور
        </button>
      </div>
    </div>
  );
}
