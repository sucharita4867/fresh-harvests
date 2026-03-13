import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import cart from './Shopping cart.png'

const Navbar = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-secondary font-semibold border-b-2 border-[#749b3f]"
      : "text-white hover:text-secondary";
  const links = (
    <>
      <li>
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={navClass}>
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={navClass}>
          About us
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={navClass}>
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">
          <Logo />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <ul className="flex gap-4">
          <li>Favorites</li>
          <li>Cart</li>
        </ul>
        <a className="btn">Sine in</a>
      </div>
    </div>
  );
};

export default Navbar;
