import React from "react";
import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto px-5 fixed top-0">
      <div className="">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
