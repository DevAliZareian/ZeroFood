import React from "react";
import Food from "./Food";
import CategorySection from "./CategorySection";
import Container from "./Container";

export default function Menu({ data, selectedCategory }) {
  return (
    <Container>
      {data?.category?.map((menu) => (
        <CategorySection key={menu.id} id={menu.id} category={menu.title} selectedCategory={selectedCategory}>
          {menu?.Product?.map((food) => (
            <Food key={food.id} id={food.id} title={food.title} picture={food.picture} description={food.description} price={food.price} />
          ))}
        </CategorySection>
      ))}
    </Container>
  );
}
