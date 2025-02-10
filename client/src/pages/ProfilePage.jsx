import React from "react";
import CustomerProfile from "../components/app/user/CustomerProfile";
import RestaurantProfile from "../components/app/user/RestaurantProfile";
import useWindowSize from "../hooks/useWindowSize";

export default function ProfilePage() {
  const { width } = useWindowSize();

  const role = "owner";
  return <>{width > 768 ? role == "owner" ? <RestaurantProfile /> : <CustomerProfile /> : <WindowSizeError />}</>;
}
