import React from "react";
import { ServicesData } from "../../../data/data";

const Services = () => {
  return (
    <div className="bg-[#1e1e20] py-[80px] ">
      <div className="w-[1200px] mx-auto px-5 ">
        <span className="flex  gap-3">
          <p className="text xs:text-[13px] md:!text-base text-[#00A795] uppercase font-bold leading-[19px] pb-2 md:pb-5 about-us aos-init aos-animate">
            Our
          </p>
          <div className="w-[30px] h-[2px] bg-[#8f8c8c] mt-[10px]" />
        </span>
        <h3 className="text-white xs:text-[28px] md:!text-5xl xs:pb-3 lg:!pb-8  font-bold ">
          Services
        </h3>
        <div className="grid grid-cols-2 gap-5  mt-[30px]">
          {ServicesData.map((item) => (
            <div className="rounded-xl  p-[32px] bg-[#252527]">
              <h3 className="text-white sm:text-[28px] lg:text-[38px] font-bold leading-120 mb-1 sm:mb-3 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-[gray] font-sans font-normal text-[14px]  sm:text-sm lg:text-base leading-130 lg:leading-140 xs:leading-140 tracking-[0.2px] line-clamp-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
