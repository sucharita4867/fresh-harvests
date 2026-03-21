import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
