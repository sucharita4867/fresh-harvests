import React from "react";
import logo from "/Logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <img src={logo} alt="" />
      <p className="text-[#212337] text-2xl font-bold">Fresh Harvests</p>
    </div>
  );
};

export default Logo;
