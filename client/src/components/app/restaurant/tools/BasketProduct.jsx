import ChangeAmount from "./ChangeAmount";

export default function BasketProduct({ title, price, count }) {
  return (
    <div className="flex flex-col pr-0 pl-0 pt-[0.5rem] pb-[0.5rem] border-b border-solid border-[rgba(58,61,66,0.06)]">
      <div className="min-h-[2.5rem] flex justify-between items-center">
        <span className="text-[0.875rem] font-bold text-[rgb(58,61,66)]">{title}</span>
      </div>
      <div className="flex items-center justify-between h-[2.5rem]">
        <div className="inline-flex flex-col">
          <div className="inline-flex items-center">
            <div className="inline-flex flex-col items-start">
              <span className="font-bold text-[0.875rem] text-[rgb(58,61,66)]">
                {price} <span className="sc-hKgILt cnaQBH">تومان</span>
              </span>
            </div>
          </div>
        </div>
        <ChangeAmount count={count} />
      </div>
    </div>
  );
}
