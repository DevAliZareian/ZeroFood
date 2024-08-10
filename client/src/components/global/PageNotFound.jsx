import React from "react";
import BackBtn from "./BackBtn";

export default function PageNotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
      <img width={"30%"} src="../../../public/assets/404.svg" alt="404NotFound" />
      <p className="text-2xl font-bold">چیزی پیدا نشد :(</p>
      <BackBtn />
    </div>
  );
}
