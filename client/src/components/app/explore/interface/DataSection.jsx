import React from "react";

export default function DataSection({ children }) {
  return <div className="w-[calc(100%+2rem)] m-[calc(-1rem)] flex flex-wrap">{children}</div>;
}
