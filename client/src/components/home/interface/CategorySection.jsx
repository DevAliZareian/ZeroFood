import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  { name: "ایرانی", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_irani_1.jpg", link: "/explore" },
  { name: "فست‌فود", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_fastfood_1.jpg" },
  { name: "کباب", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_kebab_1.jpg" },
  { name: "پیتزا", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_pizza_1.jpg" },
  { name: "برگر", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_burger_1.jpg" },
  { name: "ساندویچ", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_sandwich_1.jpg" },
  { name: "سوخاری", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_sokhari_1.jpg" },
  { name: "پاستا", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_italy_1.jpg" },
  { name: "سالاد", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_salad_1.jpg" },
  { name: "دریایی", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_seafood_1.jpg" },
  { name: "بین‌الملل", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_asian_1.jpg" },
  { name: "گیلانی", image: "https://cdn.snappfood.ir/uploads/images/tags/website_image_gilani_1.jpg" },
];

export default function CategorySection() {
  return (
    <div className="m-0 flex flex-col items-center">
      <h2 className="w-full mb-[2rem] font-bold">دسته بندی‌ها</h2>
      <div className="flex flex-wrap gap-[2.6rem] mb-[2rem] w-[calc(100%+2rem)] m-[calc(-1rem)]">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
}
