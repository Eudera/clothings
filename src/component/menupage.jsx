import React, { useState } from "react";
import "./component.css";
import MenuSlider from "./menuslider";
import MenuCategory from "./menuCategory";
import { cate } from "./cate";
import { popularArray } from "./popular";
import Popular from "./menupopular";
import Search from "./search";
import Nav from "./nav";

const Menu = () => {
  const [searchvalue, setSearchValue] = useState(cate);

  const handleSearchValue = (filtermenu) => {
    setSearchValue(filtermenu);
  };

  return (
    <div className="pt-[40px] px-[21px]  ">
      <div className="flex items-center justify-between ">
        <div>
          <h2 className="text-[20px] font-bold">Hi Dera,</h2>
          <p className="text-[17px] mt-[5px] font-semibold">
            Shop your wears here.
          </p>
        </div>
        <button className="text-[26px] rounded-[50%] px-[19px] py-[13px]  bell">
          <i className="fa-solid fa-bell"></i>
        </button>
      </div>
      <Search searchterm={handleSearchValue} />
      <MenuSlider />
      <MenuCategory categories={cate} />
      <Popular Popular={popularArray} />
      <Nav />
    </div>
  );
};

export default Menu;
