import React from "react";

export default function Container({ children }) {
  return <div className="relative w-full min-h-screen flex flex-col items-center justify-center">{children}</div>;
}
