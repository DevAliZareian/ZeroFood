import React from "react";
import Loading from "react-loading";

export default function Submit({ authCode, isLoginPending, isAuthorizationPending, watchAuthCode, watchEmail }) {
  return (
    <>
      {authCode ? (
        <button
          type="submit"
          className={`mt-[1.5rem] ${
            !watchAuthCode ? "text-zinc-400 bg-zinc-200 border-zinc-300" : "bg-green-500 text-white"
          } w-full min-w-[6.6875rem] p-2 h-12 inline-flex items-center justify-center text-center border-none cursor-pointer duration-[0.3s] overflow-hidden rounded-[0.375rem] text-[1.125rem] font-bold`}
        >
          {isLoginPending ? <Loading type={"bubbles"} /> : "ورود"}
        </button>
      ) : (
        <button
          type="submit"
          className={`mt-[1.5rem] ${
            !watchEmail ? "text-zinc-400 bg-zinc-200 border-zinc-300" : "bg-green-500 text-white"
          } w-full min-w-[6.6875rem] p-2 h-12 inline-flex items-center justify-center text-center border-none cursor-pointer duration-[0.3s] overflow-hidden rounded-[0.375rem] text-[1.125rem] font-bold`}
        >
          {isAuthorizationPending ? <Loading type={"bubbles"} /> : "ادامه"}
        </button>
      )}
    </>
  );
}
