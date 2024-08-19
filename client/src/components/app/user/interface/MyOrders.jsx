import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { usePopup } from "../../../../contexts/PopupContext";
export default function MyOrders() {
  const [age, setAge] = React.useState("");
  const { popup, setPopup } = usePopup();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="flex flex-col w-full overflow-y-auto bg-white border-[0.0625rem] border-solid border-[rgba(58,61,66,0.06)] rounded-[0.75rem] shadow-div">
      <div className="flex items-center justify-start p-[1rem]">
        <p className="font-bold text-[1rem] text-[rgb(83,86,92)]">سفارش های من</p>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center justify-between p-[1rem]">
          <div
            onClick={() => {
              setPopup((prevState) => ({ ...prevState, orderDetails: true }));
            }}
            className="flex items-center justify-center gap-1 cursor-pointer"
          >
            <p>سالاد شیرازی</p>
            <span className="text-[0.875rem] text-zinc-400">(سید امیررضا سبزپوش)</span>
          </div>
          <p className="text-green-500">12:30 - 1403/12/07</p>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="font">وضعیت</InputLabel>
            <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="وضعیت" onChange={handleChange}>
              <MenuItem value="">
                <em>بررسی نشده</em>
              </MenuItem>
              <MenuItem id="font" value={10}>
                <p>در حال انجام</p>
              </MenuItem>
              <MenuItem id="font" value={20}>
                <p>تمام شده</p>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
