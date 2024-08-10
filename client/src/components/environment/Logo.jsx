import React from "react";
import IconFastFood from "../../../public/assets/IconFastFood";
import { Link } from "react-router-dom";
export default function Logo({ size }) {
  return (
    <Link to={"/"} className={`flex items-center justify-center gap-2 text-3xl text-green-500`}>
      <IconFastFood />
      <h1>زیروفود</h1>
    </Link>
  );
}
