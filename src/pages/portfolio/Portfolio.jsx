import React from "react";
import SectionOne from "../../components/portfolio/SectionOne";
import SectionTwo from "../../components/portfolio/SectionTwo";
import SectionThree from "../../components/portfolio/SectionThree";
import SectionFour from "../../components/portfolio/SectionFour";
import SectionFive from "../../components/portfolio/SectionFive";
import Onion from "../../components/onion/Onion";

const Portfolio = () => {
  return (
    <div className="bg-[#1e1e20] pt-[140px]">
      <div className="max-w-[1200px] flex  pb-[100px] flex-col gap-7 mx-auto px-5">
        <h3 className="bg-[#1E1E20] font-bold uppercase text-[32px] md:text-[64px] text-white leading-[130%]">
          Portfolio
        </h3>
        <div className="">
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            Branding
          </button>
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            Mobile app
          </button>
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            CRM
          </button>
          <button className="py-2 px-5 border-[1px] rounded-xl text-[#a3a3a3] border-[#434344]">
            Website
          </button>
        </div>

        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
      <div className="bg-[#141415] py-[80px]">
        <Onion />
      </div>
    </div>
  );
};

export default Portfolio;
