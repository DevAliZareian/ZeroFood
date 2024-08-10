import React from "react";
import Loading from "react-loading";

export default function FallBack() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Loading type={"spinningBubbles"} color="#131313ff" height={150} width={150} />
    </div>
  );
}
