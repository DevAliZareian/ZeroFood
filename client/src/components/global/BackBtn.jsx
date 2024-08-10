import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackBtn() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/explore")}
      className="w-auto min-w-[6.6875rem] p-2 h-max inline-flex items-center justify-center text-center text-white bg-green-500 border-none cursor-pointer duration-[0.3s] overflow-hidden rounded-[0.375rem] text-[1.125rem] font-bold"
    >
      بازگشت
    </button>
  );
}
