import React from "react";

export default function DescriptionOrder() {
  return (
    <textarea
      placeholder="توضیحات سفارش..."
      name="description"
      className="w-full min-h-[calc(6rem)] mt-[1rem] mb-[calc(1.75rem)] p-[0.75rem] text-[rgb(58,61,66)] border-[rgba(58,61,66,0.12)] rounded-[0.375rem] resize-y overflow-auto"
    ></textarea>
  );
}
