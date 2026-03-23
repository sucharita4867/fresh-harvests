import React from "react";
import bg from "./../../assets/Bg.png";
import bg2 from "./../../assets/Bg (1).png";
import img from "./../../assets/bannerImg.png";
import aro from "./../../assets/Clip path group.png";

const Banner = () => {
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Background Images */}
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

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto h-full px-10 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 mt-32 lg:mt-0 text-left">
          <p className="text-[#749B3F] text-lg font-medium bg-[#749B3F1A] inline-block px-4 py-1 rounded-lg mb-4">
            Welcome to Fresh Harvest
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
            Fresh Fruits and <br />
            <span className="text-primary">Vegetables</span>
          </h1>
          <p className="text-secondary mt-4 max-w-md">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>
          <button className="btn bg-[#ff6a19] hover:bg-[#e85a24] text-white border-none mt-8 px-8">
            Shop Now
          </button>
        </div>

        {/* Right Side: Image with Girl */}
        <div className="lg:w-1/2 h-full flex items-end justify-center relative">
          <img
            className="h-[90%] w-auto object-contain z-20"
            src={img}
            alt="Girl with vegetables"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
