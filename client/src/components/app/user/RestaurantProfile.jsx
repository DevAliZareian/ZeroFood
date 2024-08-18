import React from "react";
import Header from "../../environment/Header";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function RestaurantProfile() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex justify-center pt-[3.75rem] pb-[1.5rem] pr-[1.5rem] pl-[1.5rem] grow w-full max-w-[85.375rem] mt-0 mb-0 ml-auto mr-auto">
        <div className="w-[calc(100%+2rem)] m-[calc(-1rem)] flex flex-wrap">
          <div className="basis-[8.33333%] max-w-[8.33333%] p-[calc(1rem)]"></div>
          <aside className="basis-[25%] max-w-[25%] p-[calc(1rem)]">
            <div className="sticky top-[5.625rem]">
              <nav className="flex flex-col bg-white rounded-[0.75rem] shadow-div border-[0.0625rem] border-solid border-[rgba(58,61,66,0.06)]">
                <div className="flex items-center justify-between flex-wrap pt-[1.25rem] pb-[1.25rem] pr-[1rem] pl-[1rem] cursor-pointer text-right border-b-[0.0625rem] border-solid border-[rgba(58,61,66,0.06)]">
                  <span className="font-bold text-[1.125rem] text-[rgb(58,61,66)]">علی زارعیان</span>
                  <svg className="translate-y-[calc(50%+3px)]" xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 9 16" fill="rgba(24,28,32,0.2)">
                    <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
                  </svg>
                  <span className="grow shrink basis-full text-[0.875rem] text-[rgb(58,61,66)]" dir="ltr">
                    زیروفود
                  </span>
                </div>
                <div className="flex items-center justify-between pt-[1.375rem] pb-[1.375rem] pr-[1rem] pl-[1rem] text-right border-b-[0.0625rem] border-solid border-[rgba(58,61,66,0.06)]">
                  <span className="text-[0.875rem] text-[rgb(58,61,66)]">سفارش‌های من</span>
                </div>
                <div className="flex items-center justify-between pt-[1.375rem] pb-[1.375rem] pr-[1rem] pl-[1rem] text-right border-b-[0.0625rem] border-solid border-[rgba(58,61,66,0.06)]">
                  <span className="text-[0.875rem] text-[rgb(58,61,66)]">لیست تراکنش‌ها</span>
                </div>
                <div className="flex items-center justify-between pt-[1.375rem] pb-[1.375rem] pr-[1rem] pl-[1rem] text-right border-b-[0.0625rem] border-solid border-[rgba(58,61,66,0.06)]">
                  <span className="text-[0.875rem] text-[rgb(58,61,66)]">منو</span>
                </div>
                <div className="flex items-center justify-between pt-[1.375rem] pb-[1.375rem] pr-[1rem] pl-[1rem] text-right border-b-[0.0625rem] border-solid border-[rgba(58,61,66,0.06)]">
                  <span className="text-[0.875rem] text-[rgb(58,61,66)]">خروج</span>
                </div>
              </nav>
            </div>
          </aside>
          <section className="basis-[58.3333%] max-w-[58.3333%] p-[calc(1rem)]">
            <div className="flex flex-col w-full overflow-y-auto bg-white border-[0.0625rem] border-solid border-[rgba(58,61,66,0.06)] rounded-[0.75rem] shadow-div">
              <div className="flex items-center justify-start p-[1rem]">
                <p className="font-bold text-[1rem] text-[rgb(83,86,92)]">سفارش های من</p>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full flex items-center justify-between p-[1rem]">
                  <div className="flex items-center justify-center gap-1">
                    <p>سالاد شیرازی</p>
                    <span className="text-[0.875rem] text-zinc-400">(سید امیررضا سبزپوش)</span>
                  </div>
                  <p className="text-green-500">12:30 - 1403/12/07</p>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="font">وضعیت</InputLabel>
                    <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="وضعیت" onChange={handleChange}>
                      <MenuItem value="">
                        <em>بررسی نشده</em>
                      </MenuItem>
                      <MenuItem id="font" value={10}>
                        <p>در حال انجام</p>
                      </MenuItem>
                      <MenuItem id="font" value={20}>
                        <p>تمام شده</p>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
