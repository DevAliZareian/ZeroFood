import React from "react";

export default function Email({ setEmail }) {
  return (
    <>
      <p className="opacity-80 font-bold text-[0.75rem] text-zinc-700">ایمیل</p>
      <div className="relative mt-[0.375rem] mb-[0.375rem] h-[3rem] rounded-[0.375rem] bg-white transition-border border-[0.09375rem] border-solid focus-within:border-gray-800">
        <input {...setEmail("email", { required: true })} type="text" className="p-[0.75rem] border-none outline-none m-0 w-full h-full rounded-[0.375rem]" />
      </div>
      <p className="opacity-80 font-bold text-[0.75rem] text-zinc-400">پوشه اسپم را چک کنید!</p>
    </>
  );
}
