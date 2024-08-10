import React from "react";

export default function Container({ children }) {
  return (
    <section className="basis-[50%] max-w-[50%] p-[calc(1rem)]">
      <section className="bg-white border-[0.0625rem] border-solid border-[rgb(235,237,240)] rounded-[0.5rem]">{children}</section>
    </section>
  );
}
