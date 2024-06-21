import React from "react";
import { BiArrowToRight } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";

const Portfolio = () => {
  return (
    <div className="bg-[#141415] py-[80px]">
      <div className="w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 gap-5">
          <div
            className="relative h-[430px] group "
            style={{
              backgroundImage:
                'url("https://uic.group/media/cache/0c/39/0c392b9a99ead3fb208087f2a1e1e145.jpg")',
              backgroundSize: "100% 100%",
            }}
          >
            <div className=" group-hover:bg-custom-gradient1 h-full w-full"></div>
            <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition flex items-center gap-4 font-semibold ">
              <p>VIEW MORE</p>
              <IoIosArrowRoundForward size={50} className="bg-[#dbdbdb81] rounded-full " />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <a
              href="#"
              className="relative group "
              style={{
                backgroundImage:
                  'url("https://uic.group/media/cache/29/88/29883e26588ac429b3ca86b3ac39efa6.jpg")',
                backgroundSize: "100% 100%",
              }}
            >
              <div className=" group-hover:bg-custom-gradient h-full w-full"></div>
              <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition bg-[#dbdbdb81] rounded-full">
                <IoIosArrowRoundForward size={40} />
              </div>
            </a>
            <a
              href="#"
              className="relative group "
              style={{
                backgroundImage:
                  'url("https://uic.group/media/cache/cc/39/cc392cc7e6083d974df22bdf3f7baae3.jpg")',
                backgroundSize: "100% 100%",
              }}
            >
              <div className=" group-hover:bg-custom-gradient h-full w-full"></div>
              <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition bg-[#dbdbdb81] rounded-full">
                <IoIosArrowRoundForward size={40} />
              </div>
            </a>{" "}
            <a
              href="#"
              className="relative group "
              style={{
                backgroundImage:
                  'url("https://uic.group/media/cache/59/f1/59f1ca58bab7263f9c5eaff3033d5951.jpg")',
                backgroundSize: "100% 100%",
              }}
            >
              <div className=" group-hover:bg-custom-gradient h-full w-full"></div>
              <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition bg-[#dbdbdb81] rounded-full">
                <IoIosArrowRoundForward size={40} />
              </div>
            </a>{" "}
            <a
              href="#"
              className="relative group "
              style={{
                backgroundImage:
                  'url("https://uic.group/media/cache/b6/27/b6273a3cbd3fe1e5ad0e9b9acdccdfc4.jpg")',
                backgroundSize: "100% 100%",
              }}
            >
              <div className=" group-hover:bg-custom-gradient h-full w-full"></div>
              <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 text-[#fff] right-5 -translate-x-3 group-hover:translate-x-0  duration-300 transition bg-[#dbdbdb81] rounded-full">
                <IoIosArrowRoundForward size={40} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
