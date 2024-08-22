import React from "react";
import { useFetchDataOnLoad } from "../../../../hooks/useFetchDataOnLoad";
import Loading from "react-loading";
import { BASE_URL } from "../../../../utils/constants";

export default function Main({ children }) {
  const { data, isPending } = useFetchDataOnLoad(`${BASE_URL}/rest/all`, "restaurants");
  if (isPending) {
    return (
      <div className="flex items-center justify-center">
        <Loading type={"bubbles"} color="#22C55E" height={150} width={150} />
      </div>
    );
  }
  if (!data || !Array.isArray(data)) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="text-2xl font-bold">چیزی پیدا نشد :(</p>
      </div>
    );
  }
  return <div className="p-[1.5rem] flex-grow w-full max-w-[85.375rem] mt-0 mb-0 mr-auto ml-auto">{children}</div>;
}
