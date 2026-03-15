import React from "react";
import bg from "./../../assets/Bg.png";
import bg2 from "./../../assets/Bg (1).png";

const Banner = () => {
  return (
    <div className="relative">
      <img src={bg} alt="" />
      <img src={bg2} className="absolute top-0 right-0 " alt="" />
    </div>
  );
};

export default Banner;
