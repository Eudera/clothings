import React from "react";
import Nav from "./nav";
import { cate } from "./cate";
import { Link, Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <div className="cate">
      <div className="flex gap-[10px]  ">
        <div className=" flex flex-col">
          {cate.map((menuCate, i) => {
            return (
              <Link
                key={i}
                to={`/categories/${menuCate.id}`}
                className="catedesc"
              >
                {menuCate.desc}
              </Link>
            );
          })}
        </div>
        <div className="me p-[10px] ">
          <Outlet />
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Categories;
