import React from "react";

export default function Items({ children }) {
  return (
    <div className="max-w-[75%] basis-[75%] flex flex-wrap">
      <div className="w-[calc(100%+1.5rem)] m-[calc(0rem)] flex flex-wrap gap-6">{children}</div>
    </div>
  );
}
