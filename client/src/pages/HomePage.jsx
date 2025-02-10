import React from "react";
import Hero from "../components/home/Hero";
import WindowSizeError from "../components/global/WindowSizeError";
import useWindowSize from "../hooks/useWindowSize";

export default function HomePage() {
  const { width } = useWindowSize();
  return <>{width > 768 ? <Hero /> : <WindowSizeError />}</>;
}
