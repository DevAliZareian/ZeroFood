import React from "react";
import Items from "../interface/Items";
import Restaurant from "../../cart/Restaurant";
import { useGetQueryData } from "../../../../hooks/useGetQueryData";

export default function Restaurants() {
  const data = useGetQueryData("restaurants");
  return (
    <Items>
      {data.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          id={restaurant.id}
          title={restaurant.title}
          banner={restaurant.banner}
          logo={restaurant.logo}
          avgScore={restaurant.avgScore}
          category={restaurant.category}
          delivery={restaurant.delivery}
        />
      ))}
    </Items>
  );
}
