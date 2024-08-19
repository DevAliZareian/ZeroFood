import React from "react";
import CustomerProfile from "../components/app/user/CustomerProfile";
import RestaurantProfile from "../components/app/user/RestaurantProfile";

export default function ProfilePage() {
  const role = "owner";
  return <>{role == "owner" ? <RestaurantProfile /> : <CustomerProfile />}</>;
}
