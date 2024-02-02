import React from "react";
import Scroll from "./scroll";
import { Link } from "react-router-dom";

const Category = ({ categories }) => {
  const CateList = ({ image, desc }) => {
    return (
      <div className="py-[2px] px-[4px] place-items-center grid cateDes">
        <img
          className="h-[52px] rounded-[12px] min-w-[52px] shadow-sm cateimg"
          src={image}
          alt="cate"
        />
        <p className="mt-[5px] font-semibold capitalize">{desc}</p>
      </div>
    );
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-[20px]">
        <h2 className="text-[18px] font-bold">Category</h2>
        <Link to={"/categories"}>
          <p className="text-[16px] font-bold">View all</p>
        </Link>
      </div>
      <div className="overflow-hidden">
        <Scroll>
          {categories.map((user, i) => {
            return <CateList key={i} image={user.image} desc={user.desc} />;
          })}
        </Scroll>
      </div>
    </div>
  );
};

export default Category;
