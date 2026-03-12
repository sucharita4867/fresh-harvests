import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
