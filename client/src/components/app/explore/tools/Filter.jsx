import { Switch } from "@mui/material";
import React from "react";

export default function Filter() {
  return (
    <aside className="max-w-[25%] basis-[25%]">
      <div className="sticky top-[5.5rem]">
        <nav className="min-h-[9.375rem] flex flex-col items-center">
          <div className="mb-[0.5rem] p-[1rem] border border-solid border-[rgba(58,61,66,0.06)] rounded-[0.75rem] shadow-div flex items-center justify-center">
            <div className="flex items-start flex-grow flex-col flex-wrap">
              <div className="w-full flex items-center justify-between min-h-[3.4375rem] border-b border-solid border-[rgba(58,61,66,0.06)]">
                <span className="text-[0.875rem] text-[rgb(58,61,66)]">دارای کوپن</span>
                <Switch />
              </div>
              <div className="w-full flex items-center justify-between min-h-[3.4375rem] border-b border-solid border-[rgba(58,61,66,0.06)]">
                <span className="text-[0.875rem] text-[rgb(58,61,66)]">دارای تخفیف</span>
                <Switch />
              </div>
              <div className="w-full flex items-center justify-between min-h-[3.4375rem] border-b border-solid border-[rgba(58,61,66,0.06)]">
                <span className="text-[0.875rem] text-[rgb(58,61,66)]">پیک زیروفود</span>
                <Switch />
              </div>
              <div className="w-full flex items-center justify-between min-h-[3.4375rem] border-b border-solid border-[rgba(58,61,66,0.06)]">
                <span className="text-[0.875rem] text-[rgb(58,61,66)]">فودپرو</span>
                <Switch />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
