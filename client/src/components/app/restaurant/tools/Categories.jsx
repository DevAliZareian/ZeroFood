import React, { useState } from "react";

export default function Categories({ data }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <nav className="h-[calc(-332px+100vh)] min-h-[9.375rem] overflow-y-auto flex flex-col items-end">
      {data?.category.map((category, index) => (
        <p
          key={category.title}
          onClick={() => setSelectedCategory(category.title)}
          className={`${!selectedCategory && index == 0 ? "border-l-[0.125rem] border-solid border-[rgb(58,61,66)] text-[rgb(58,61,66)] font-bold" : "text-[rgb(83,86,92)]"} ${
            selectedCategory === category.title ? "border-l-[0.125rem] border-solid border-[rgb(58,61,66)] text-[rgb(58,61,66)] font-bold" : "text-[rgb(83,86,92)]"
          } mb-[1rem] pt-[0.125rem] pb-[0.125rem] pr-[0.75rem] pl-[0.75rem] text-[0.875rem] cursor-pointer`}
        >
          {category.title}
        </p>
      ))}
    </nav>
  );
}
