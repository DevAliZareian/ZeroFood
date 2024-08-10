import React from "react";
import Loading from "react-loading";

export default function IsPending() {
  return (
    <div className="flex items-center justify-center">
      <Loading type={"bubbles"} color="#22C55E" height={150} width={150} />
    </div>
  );
}
