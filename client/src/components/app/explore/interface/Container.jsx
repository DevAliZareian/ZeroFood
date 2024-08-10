import React from "react";

export default function Container({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="sticky top-0 right-0 left-0 z-50 w-full">{children}</div>
    </div>
  );
}
