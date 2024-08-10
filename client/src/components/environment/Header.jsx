import React from "react";
import Logo from "./Logo";
import LoginBtn from "../global/LoginBtn";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-div flex items-center sticky top-0 right-0 left-0 z-50">
      <div className="w-full bg-white h-[4.5rem] p-[1rem] flex items-center justify-between">
        <Logo />
        <div className="absolute right-0 left-0 w-[29vw] h-[3rem] flex items-center justify-start m-auto p-[1rem] bg-[rgb(235,237,240)] rounded-[0.625rem]">
          <svg className="ml-[0.5rem]" width="17" height="17" viewBox="0 0 17 17" fill="#A6AAAD">
            <path d="M7.75008 0.666016C11.6621 0.666016 14.8334 3.83733 14.8334 7.74935C14.8334 9.40479 14.2655 10.9276 13.3139 12.1336L16.5477 15.3684C16.8731 15.6939 16.8731 16.2215 16.5477 16.5469C16.2222 16.8724 15.6946 16.8724 15.3692 16.5469L12.1343 13.3132C10.9283 14.2648 9.40552 14.8327 7.75008 14.8327C3.83806 14.8327 0.666748 11.6614 0.666748 7.74935C0.666748 3.83733 3.83806 0.666016 7.75008 0.666016ZM7.75008 2.33268C4.75854 2.33268 2.33341 4.75781 2.33341 7.74935C2.33341 10.7409 4.75854 13.166 7.75008 13.166C10.7416 13.166 13.1667 10.7409 13.1667 7.74935C13.1667 4.75781 10.7416 2.33268 7.75008 2.33268Z"></path>
          </svg>
          <p className="ml-[0.5rem] text-[rgb(166,170,173)]">جست‌وجو در زیروفود</p>
        </div>
        <LoginBtn />
      </div>
    </header>
  );
}
