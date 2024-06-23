import React from "react";
import logo from "../../assets/logo.svg";
import { FaGlobeAmericas } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";

const Header = () => {
  return (
    <div className="fixed w-full py-5 z-[9999] top-0 bg-black">
      <div className="max-w-[1200px] w-full flex justify-between items-center mx-auto px-5">
        <div className="">
          <button className="border-[1px] text-[18px] bg-[#4b4b4d] py-1 uppercase font-bold text-[#fff] px-3 flex gap-1 items-center rounded-lg">
            <CgMenuLeft />
          </button>
        </div>
        <Link to="/">
          #00a690
          <img src={logo} alt="Logo" />
        </Link>
        <div className="hidden lg:flex items-center gap-0">
          <ul className="flex gap-8">
            <li>
              <NavLink
                to="/about"
                className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brief"
                className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vacancy"
                className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              >
                Blogs
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-10">
            <a
              href="tel:+998712007007"
              className="text-[18px] xl:text-[24px] font-bold text-[#fff] border-bottom hover:text-white duration-300"
            >
              <span className="text-[#9AAFB2]">+998 71</span> 200 70 07
            </a>
            <button className="border-[1px] text-[15px] py-1 uppercase font-bold text-[#fff] px-3 flex gap-1 items-center rounded-xl">
              <FaGlobeAmericas />
              en
            </button>
          </div>
        </div>
        <div className="">
          <button className="border-[1px] text-[15px] py-1 uppercase bg-[#4b4b4d] font-bold text-[#fff] px-3 flex gap-1 items-center rounded-xl">
            <FaGlobeAmericas />
            en
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
