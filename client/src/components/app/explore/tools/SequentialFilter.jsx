import { Autocomplete, TextField } from "@mui/material";
import React from "react";

export default function SequentialFilter() {
  return (
    <div className="mb-[2rem] flex items-center justify-end">
      <Autocomplete
        id="combo-box-demo"
        defaultValue={"به ترتیب پیش‌فرض"}
        options={["برترین‌ها", "به ترتیب پیش‌فرض"]}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField className="test" {...params} />}
      />
    </div>
  );
}
