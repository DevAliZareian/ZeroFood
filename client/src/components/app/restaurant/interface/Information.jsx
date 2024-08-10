import React from "react";

export default function Information({ data }) {
  return (
    <aside className="basis-[25%] max-w-[25%] p-[calc(1rem)]">
      <div className="sticky top-[5.5rem]">
        <section>
          <header className="flex items-center mb-[1.5rem]">
            <div className="ml-[0.75rem] relative w-[5.5rem] h-[5.5rem] bg-white rounded-[0.75rem] shadow-div flex items-center justify-center">
              <img
                className="border border-solid border-[rgba(58,61,66,0.06)] rounded-[0.75rem]"
                alt={data?.restaurant.title}
                src="https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/5f7c5992998ef.jpg"
                width="80"
                height="80"
              />
            </div>
            <div className="w-[70%] flex flex-col">
              <div className="flex items-center justify-between">
                <div>
                  <div className="ml-[0.5rem] flex items-center justify-center">
                    <span className="ml-[0.5rem] flex items-center justify-center">
                      <svg className="ml-[0.25rem]" width="12" height="12" viewBox="0 0 12 12" fill="#FFCE00">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.99984 9.62097L2.42572 11.5L3.10832 7.52016L0.216797 4.70163L4.21278 4.12098L5.99984 0.5L7.7869 4.12098L11.7829 4.70163L8.89136 7.52016L9.57395 11.5L5.99984 9.62097Z"
                        ></path>
                      </svg>
                      <span className="font-bold text-[0.75rem] text-[rgb(58,61,66)]">۴.۵</span>
                    </span>
                    <p className="text-[0.75rem] text-[rgb(166,170,173)]">(۲,۴۶۷ امتیاز)</p>
                  </div>
                </div>
              </div>
              <h1 className="mt-[0.875rem] font-bold text-[1.125rem] text-[rgb(58,61,66)]">{data?.restaurant.title}</h1>
            </div>
          </header>
          <div className="flex flex-wrap items-center mb-[1.5rem]">
            <button
              dir="rtl"
              className="h-[2.5rem] font-bold text-[1rem] text-green-500 inline-flex items-center justify-center cursor-pointer transition-all min-w-[6.6875rem] w-full border-[0.09375rem] border-solid border-[rgba(0,133,66,0.06)] rounded-[3rem] bg-white shadow-div"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1.0625rem" height="1.0625rem" viewBox="0 0 20 20" fill="#D2D4D6">
                <path
                  d="M9.00033 0.666016C13.5952 0.666016 17.3337 4.40435 17.3337 8.99935C17.3337 13.5944 13.5953 17.3327 9.00033 17.3327C4.40532 17.3327 0.666992 13.5944 0.666992 8.99935C0.666992 4.40435 4.40532 0.666016 9.00033 0.666016ZM9.00033 2.33268C5.32413 2.33268 2.33366 5.32751 2.33366 8.99935C2.33366 12.6712 5.32413 15.666 9.00033 15.666C12.6765 15.666 15.667 12.6712 15.667 8.99935C15.667 5.32755 12.6765 2.33268 9.00033 2.33268ZM8.17072 8.99242C8.17072 8.53602 8.5407 8.16604 8.9971 8.16602H9.011C9.4674 8.16603 9.83739 8.53602 9.83739 8.99242V11.9866C9.83739 12.0849 9.83722 12.1999 9.83689 12.3316C9.83572 12.7928 9.46152 13.166 9.00033 13.166C8.54196 13.166 8.17039 12.7944 8.17039 12.3361C8.17039 12.3355 8.17039 12.335 8.17038 12.3345C8.17061 12.217 8.17072 12.101 8.17072 11.9866V8.99242ZM7.95866 5.89252C7.95866 5.31723 8.42102 4.85086 9.00033 4.85086C9.57562 4.85086 10.042 5.31322 10.042 5.89252C10.042 6.46782 9.57963 6.93419 9.00033 6.93419C8.42503 6.93419 7.95866 6.47183 7.95866 5.89252Z"
                  fill="#00D170"
                ></path>
              </svg>
              <p className="mr-[0.5rem] text-[0.875rem]">اطلاعات و نظرات</p>
            </button>
          </div>
        </section>
        <nav className="h-[calc(-332px+100vh)] min-h-[9.375rem] overflow-y-auto flex flex-col items-end">
          {data?.category.map((category) => (
            <p className="mb-[1rem] pt-[0.125rem] pb-[0.125rem] pr-[0.75rem] pl-[0.75rem] font-bold text-[0.875rem] text-[rgb(58,61,66)] cursor-pointer border-l-[0.125rem] border-solid border-[rgb(58,61,66)]">
              {category.title}
            </p>
          ))}
        </nav>
      </div>
    </aside>
  );
}
//<p className="mb-[1rem] pt-[0.125rem] pb-[0.125rem] pr-[0.75rem] pl-[0.75rem] font-bold text-[0.875rem] text-[rgb(58,61,66)] cursor-pointer border-l-[0.125rem] border-solid border-[rgb(58,61,66)]">
