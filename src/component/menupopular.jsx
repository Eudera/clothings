import React from "react";
import Scroll2 from "./scroll2";

const Popular = ({ Popular }) => {
  const Poplist = ({ desc, image, price }) => {
    return (
      <div className="min-w-[165px] rounded-[20px] popular p-[10px]">
        <div className="image overflow-hidden  grid place-items-center mb-[10px] pt-[5px]">
          <img className="w-[110px] h-[120px]" src={image} />
        </div>
        <p className="font-[600] text-[17px] tracking-tight r">{desc}</p>
        <div>
          <p className="font-[800]">{price}</p>
          <div className="text-[14px]">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-[20px]">
      <div className="flex justify-between items-center mb-[20px] ">
        <h2 className="text-[18px] font-bold">Popular</h2>
        <p className="text-[16px] font-bold">View all</p>
      </div>
      <div className=" overflow-hidden">
        <Scroll2>
          {Popular.map((user, i) => {
            return (
              <Poplist
                key={i}
                image={user.img}
                desc={user.desc}
                price={user.price}
              />
            );
          })}
        </Scroll2>
      </div>
    </div>
  );
};

export default Popular;
