import React from "react";
import "./component.css";
import myImage from "../assets/deramask.png";
import Slider from "./slider";
// import MenuPage from "./menu";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <section className="pb-25 text-center h-screen overflow-hidden">
      <div className=" grid place-items-center pt-10 overflow-hidden h-[373px] mb-3 img1cont">
        <img className="w-[350px]" src={myImage} alt="dera" />{" "}
      </div>

      <div className="text-2xl px-[2rem] font-bold mb-2 ">
        <span>Find your best outfit and look great</span>
      </div>
      <Slider />
      <Link to={"menu"}>
        <button className="text-[20px] font-semibold w-[90%] py-3 px-0 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 get">
          Get Started
        </button>
      </Link>
    </section>
  );
};

export default IntroPage;
