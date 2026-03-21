import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="relative">
      {/* Navbar কে absolute করে z-index বাড়িয়ে দেওয়া হলো যাতে এটি ইমেজের উপরে থাকে */}
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
