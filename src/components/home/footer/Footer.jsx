import React from "react";
import arrow from "../../../assets/arrow.svg";
const Footer = () => {
  return (
    <div className="bg-[#1e1e20]">
      <div className="w-[1200px] mx-auto px-5">
        <div className="pb-[30px] flex justify-between">
          <ul className=" flex gap-[20px]">
            <li>
              <a
                href="#"
                className="cursor-pointer uppercase text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
              >
                About US
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
              >
                Services
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold uppercase lg:!text-base"
              >
                Portfolio
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold uppercase lg:!text-base"
              >
                Career
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="cursor-pointer text-white text-opacity-60 hover:text-opacity-100 transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base uppercase"
              >
                blog
              </a>
            </li>
          </ul>
          <a href="#" className="">
            <img
              src={arrow}
              alt=""
              className="border rounded-full w-[50px] h-[50px]  p-2"
            />
          </a>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Footer;
