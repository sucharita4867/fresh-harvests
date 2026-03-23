import React from "react";
import bg from "./../../assets/Bg.png";
import bg2 from "./../../assets/Bg (1).png";

const Banner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <img
        src={bg}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <img
        src={bg2}
        alt="green background"
        className="absolute top-0 right-0 h-full w-auto object-cover -z-10"
      />
      <div className="relative z-10 pt-20 px-10 border border-red-600">
        <h1 className="text-[#749B3F] text-xl font-medium">
          Welcome to Fresh Harvest
        </h1>
        <h3 className="text-5xl font-bold">Fresh Fruits and Vegetables</h3>
      </div>
    </div>
  );
};

export default Banner;
