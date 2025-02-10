import React from "react";
import Page from "../components/app/restaurant/Page";
import WindowSizeError from "../components/global/WindowSizeError";
import useWindowSize from "../hooks/useWindowSize";

export default function RestaurantPage() {
  const { width } = useWindowSize();
  return <>{width > 768 ? <Page /> : <WindowSizeError />}</>;
}
