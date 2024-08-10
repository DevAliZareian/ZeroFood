import React from "react";
import Header from "../../../environment/Header";
import IsPending from "../../../global/IsPending";
import PageNotFound from "../../../global/PageNotFound";
import Error from "../../../global/Error";

export default function Form({ children, isPending, data, error }) {
  if (isPending) return <IsPending />;
  if (!data) return <PageNotFound />;
  if (error) return <Error />;
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="pt-[4.25rem] pr-[1rem] pb-[1rem] pl-[1rem] w-full max-w-[85.375rem] mt-0 mb-0 ml-auto mr-auto">
        <div className="w-[calc(100%+2rem)] m-[calc(-1rem)] flex flex-wrap">{children}</div>
      </main>
    </div>
  );
}
