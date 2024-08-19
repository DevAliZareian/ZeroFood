import React from "react";
import { usePopup } from "../../../../contexts/PopupContext";

export default function OrderDetailsPopup() {
  const { setPopup } = usePopup();
  return (
    <div className="w-full h-screen flex items-center justify-center z-[99] inset-0 fixed bg-black bg-opacity-30">
      <div className="w-[50vw] max-w-[640px] max-h-[90vh] overflow-hidden shadow z-50 bg-white rounded-[7px]">
        <div className="relative w-full h-[56px] pl-[56px] flex items-center justify-between p-[12px]">
          <button
            onClick={() => {
              setPopup((prevState) => ({ ...prevState, orderDetails: false }));
            }}
            className="h-[56px] w-[56px] outline-none cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="0.875rem" height="0.875rem" viewBox="0 0 14 14" fill="#676A70">
              <path d="M8.41 7.00019L12.71 2.71019C12.8983 2.52188 13.0041 2.26649 13.0041 2.00019C13.0041 1.73388 12.8983 1.47849 12.71 1.29019C12.5217 1.10188 12.2663 0.996094 12 0.996094C11.7337 0.996094 11.4783 1.10188 11.29 1.29019L7 5.59019L2.71 1.29019C2.5217 1.10188 2.2663 0.996094 2 0.996094C1.7337 0.996094 1.4783 1.10188 1.29 1.29019C1.1017 1.47849 0.995908 1.73388 0.995908 2.00019C0.995908 2.26649 1.1017 2.52188 1.29 2.71019L5.59 7.00019L1.29 11.2902C1.19627 11.3831 1.12188 11.4937 1.07111 11.6156C1.02034 11.7375 0.994202 11.8682 0.994202 12.0002C0.994202 12.1322 1.02034 12.2629 1.07111 12.3848C1.12188 12.5066 1.19627 12.6172 1.29 12.7102C1.38296 12.8039 1.49356 12.8783 1.61542 12.9291C1.73728 12.9798 1.86799 13.006 2 13.006C2.13201 13.006 2.26272 12.9798 2.38458 12.9291C2.50644 12.8783 2.61704 12.8039 2.71 12.7102L7 8.41018L11.29 12.7102C11.383 12.8039 11.4936 12.8783 11.6154 12.9291C11.7373 12.9798 11.868 13.006 12 13.006C12.132 13.006 12.2627 12.9798 12.3846 12.9291C12.5064 12.8783 12.617 12.8039 12.71 12.7102C12.8037 12.6172 12.8781 12.5066 12.9289 12.3848C12.9797 12.2629 13.0058 12.1322 13.0058 12.0002C13.0058 11.8682 12.9797 11.7375 12.9289 11.6156C12.8781 11.4937 12.8037 11.3831 12.71 11.2902L8.41 7.00019Z"></path>
            </svg>
          </button>
        </div>
        <div className="p-[12px]">
          <p className="text-[1.5rem] font-bold">اطلاعات سفارش</p>
          <p className="text-zinc-600">سید امیررضا سبزپوش - 09302018912</p>
        </div>
        <section className="border border-solid border-zinc-600 rounded-[0.75rem] p-[12px] m-[12px]">
          <p>دو عدد سالاد شیرازی - سه عدد ماکاراونی - سه کیلو تریاک - دو عدد سالاد شیرازی - سه عدد ماکاراونی - سه کیلو تریاک</p>
        </section>
        <div className="p-[12px] flex items-center justify-between w-full">
          <div className="flex flex-col items-start justify-center gap-2">
            <p>آدرس: جهرم، فرهنگ‌شهر، خیابان امام رضا</p>
            <p>پلاک: 123536985</p>
            <h1 className="text-[1.25rem] font-bold">پرداختی</h1>
            <p className="font-semibold text-zinc-600">
              هزینه بسته‌بندی: <span className="text-zinc-600 font-normal">2,000 تومان</span>
            </p>
            <p className="font-semibold text-zinc-600">
              مجموع: <span className="text-zinc-600 font-normal">142,000 تومان</span>
            </p>
          </div>
          <img width={150} src="https://barcodeapi.org/api/qr/https%3A%2F%2Fgithub.com%2FDevAliZareian?" alt="barcode" />
        </div>

        <form className="mt-0">
          <div className="p-[12px]">
            <button
              onClick={() => setPopup((prevState) => ({ ...prevState, orderDetails: false }))}
              type="submit"
              className="w-full min-w-[6.6875rem] p-2 h-12 inline-flex items-center justify-center text-center text-white bg-green-500 border-none cursor-pointer duration-[0.3s] overflow-hidden rounded-[0.375rem] text-[1.125rem] font-bold"
            >
              تایید
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
