import React from "react";
import Loading from "react-loading";

export default function Submit({ loading, watch }) {
  return (
    <button
      type="submit"
      className={`mt-[1.5rem] ${
        !watch ? "text-zinc-400 bg-zinc-200 border-zinc-300" : "bg-green-500 text-white"
      } w-full min-w-[6.6875rem] p-2 h-12 inline-flex items-center justify-center text-center border-none cursor-pointer duration-[0.3s] overflow-hidden rounded-[0.375rem] text-[1.125rem] font-bold`}
    >
      {loading ? <Loading type={"bubbles"} /> : "ادامه"}
    </button>
  );
}
