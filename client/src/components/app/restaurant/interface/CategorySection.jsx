import React, { useEffect, useRef, useState } from "react";

export default function CategorySection({ id, children, category, selectedCategory }) {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (selectedCategory === category && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedCategory, category]);
  return (
    <section id={category} ref={sectionRef} className="scroll-mt-[4.375rem]">
      <p className="flex items-center justify-center text-[0.75rem] font-bold h-[3rem] mt-0 text-[rgb(83,86,92)]">{category}</p>
      <div className="w-[calc(100%+0rem)] m-[calc(0rem)] flex flex-wrap border-t-[0.0625rem] border-solid border-[rgb(235,237,240)]">{children}</div>
    </section>
  );
}
