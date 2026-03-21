import React from "react";
import bg from "./../../assets/Bg.png";
import bg2 from "./../../assets/Bg (1).png";

const Banner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* মেইন সাদা ব্যাকগ্রাউন্ড ইমেজ */}
      <img
        src={bg}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* ডানদিকের সবুজ ইমেজটি যা একদম টপ-রাইট এ ফিক্সড থাকবে */}
      <img
        src={bg2}
        alt="green background"
        className="absolute top-0 right-0 h-full w-auto object-cover -z-10"
      />

      {/* ব্যানারের ভেতরের কন্টেন্ট (Text, Buttons) এখানে লিখুন */}
      <div className="relative z-10 pt-40 px-10">
        <h1 className="text-5xl font-bold">
          Fresh Fruits and <br /> Vegetables
        </h1>
        {/* বাকি কন্টেন্ট... */}
      </div>
    </div>
  );
};

export default Banner;
