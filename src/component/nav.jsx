import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" bg-white name px-[15px] pt-[3px]">
      <nav className="flex justify-between  font-bold pt-[5px]  ">
        <Link to={"/menu"}>
          <button>
            <i className="fa-solid fa-house  text-[17px]  "></i>
            <p className=" text-[14px] ">Home</p>
          </button>
        </Link>
        <Link to={"/Categories"}>
          <button className="grid self-end gap-[2px]">
            <div className=" border-solid border-[#263238]  border-[2px] text-[14px] font-[800] leading-[10px] p-[1px]  w-[fit-content] m-[auto]">
              <i className="fa-solid fa-list"></i>
            </div>
            <p className=" text-[14px] mt-[1px]">Categories</p>
          </button>
        </Link>
        <Link to={"/Feed"}>
          <button className="grid self-end gap-[2px]">
            <div className="border-solid border-[#263238] border-[2px] text-[14px] font-[800] leading-[10px] p-[1px]  w-[fit-content] m-[auto] ">
              <i className="fa-solid fa-rss "></i>
            </div>
            <p className=" text-[14px] mt-[1px]">Feed</p>
          </button>
        </Link>
        <Link to={"/Interaction"}>
          <button>
            <i className="fa-solid fa-user"></i>
            <p className=" text-[14px] mt-[1px]">Account</p>
          </button>
        </Link>
        <Link to={"/Helpcenter"}>
          <button className="grid self-end gap-[2px]">
            <div className="border-solid border-[#263238] border-[1px] text-[14px] font-[800] leading-[10px] py-[2px] px-[4px] w-[fit-content] m-[auto] rounded-[50%]">
              <i className="fa-solid fa-question"></i>
            </div>
            <p className=" text-[14px] mt-[1px]">Help</p>
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
