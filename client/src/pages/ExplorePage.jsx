import React from "react";
import Explore from "../components/app/explore/Explore";
import WindowSizeError from "../components/global/WindowSizeError";
import useWindowSize from "../hooks/useWindowSize";

export default function ExplorePage() {
  const { width } = useWindowSize();
  return <>{width > 768 ? <Explore /> : <WindowSizeError />}</>;
}
