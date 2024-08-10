import React from "react";

export default function BasketAside({ children }) {
  return (
    <aside className="basis-[25%] max-w-[25%] p-[calc(1rem)]">
      <div className="sticky top-[5.5rem]">{children}</div>
    </aside>
  );
}
