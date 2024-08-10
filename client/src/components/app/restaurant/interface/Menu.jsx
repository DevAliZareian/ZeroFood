import React from "react";
import Food from "./Food";
import CategorySection from "./CategorySection";
import Container from "./Container";

export default function Menu({ data }) {
  return (
    <Container>
      {data?.category.map((menu) => (
        <CategorySection key={menu.id} category={menu.title}>
          {menu.Product.map((food) => (
            <Food key={food.id} id={food.id} title={food.title} picture={food.picture} description={food.description} price={food.price} />
          ))}
        </CategorySection>
      ))}
    </Container>
  );
}
