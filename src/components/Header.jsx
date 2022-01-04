import React from "react";
import imgLogo from "../img/woodStock.png";

const Header = () => {
  return (
    <>
    <div className="header">
      <img className="imglogo" src={imgLogo} alt="logo" />
       <div className="img1">a</div>
       <div className="img2">b</div>
    </div>
    </>
  );
};

export default Header;
