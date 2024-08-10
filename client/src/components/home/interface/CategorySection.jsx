import React from "react";
import { Link } from "react-router-dom";

export default function CategorySection() {
  return (
    <div className="m-0 flex flex-col items-center">
      <h2 className="w-full mb-[2rem] font-bold">دسته بندی‌ها</h2>
      <div className="flex flex-wrap gap-[2.6rem] mb-[2rem] w-[calc(100%+2rem)] m-[calc(-1rem)]">
        <Link className="max-w-[16.6667%]" to={"/explore"}>
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="ایرانی" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_irani_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">ایرانی</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </Link>
        <div className="max-w-[16.6667%]">
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="فست‌فود" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_fastfood_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">فست‌فود</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-[16.6667%]">
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="کباب" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_kebab_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">کباب</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-[16.6667%]">
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="پیتزا" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_pizza_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">پیتزا</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-[16.6667%]">
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="برگر" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_burger_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">برگر</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-[16.6667%]">
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="ساندویج" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_sandwich_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">ساندویچ</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-[16.6667%]">
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="سوخاری" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_sokhari_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">سوخاری</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-[16.6667%]">
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="پاستا" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_italy_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">پاستا</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-[16.6667%]">
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="سالاد" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_salad_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">سالاد</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-[16.6667%]">
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="دریایی" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_seafood_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">دریایی</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-[16.6667%]">
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="بین‌الملل" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_asian_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">بین‌الملل</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-[16.6667%]">
          <div className="relative h-[5.9375rem] p-[0.1875rem] flex items-center rounded-[0.75rem] border border-solid border-white bg-white shadow-div cursor-pointer transition-all delay-200 ease-in-out">
            <img className="border-none w-full h-full object-cover rounded-[0.75rem]" alt="گیلانی" src="https://cdn.snappfood.ir/uploads/images/tags/website_image_gilani_1.jpg" />
            <div className="bg-white flex items-center absolute right-0 bottom-0 pt-[0.25rem] pr-[1rem] pb-[0.25rem] pl-[0.8125rem] rounded-tl-[0.75rem] rounded-br-[0.75rem] transition-default">
              <p className="ml-[0.8125rem]">گیلانی</p>
              <svg className="translate-x-0 transition-default" xmlns="http://www.w3.org/2000/svg" width="6.58" height="11.17" viewBox="0 0 9 16" fill="rgb(34 197 94)">
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
