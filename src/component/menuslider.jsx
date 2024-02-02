import React, { useState, useEffect, useRef } from "react";
import image1 from "../assets/scott.jpg";
import image2 from "../assets/stella.jpg";
import image3 from "../assets/perfumes.jpg";
import image4 from "../assets/access.jpg";

const MenuSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const intervalIdRef = useRef(null);

  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value));
  };

  useEffect(() => {
    // const autoSlide = () => {
    //   intervalIdRef.current = setInterval(() => {
    //     setSliderValue((value) => (value + 1) % numberOFSlides);
    //   }, 5000);
    //   console.log(intervalIdRef.current);
    // };
    // autoSlide();

    return () => clearInterval(intervalIdRef.current); // clean up function--- Clear interval on component unmount to prevent memory leaks
  }, []); // Empty dependency array since autoSlide doesn't depend on any external values

  const numberOFSlides = 4;
  const transforValue = `translateX(-${sliderValue * 100}%)`;
  return (
    <div>
      <div className="mt-[30px] relative rounded-[20px] flex overflow-hidden mb-[25px]">
        {Array.from({ length: numberOFSlides }, (_, index) => {
          return (
            <div
              key={index}
              className={`slidercont ${index === sliderValue ? "active" : ""} `}
              style={{ transform: transforValue }}
              onChange={handleSliderChange}
            >
              {index === 0 && (
                <div className="pt-[15px] pr-[6px] pl-0 pb-[15px] rounded-[20px] relative overflow-hidden text-gray-300">
                  <i className="fa-solid fa-play absolute z-[-1] text-[22.2rem] -top-[75px] -left-[5px] live"></i>
                  <div>
                    {" "}
                    <img
                      className="w-[290px] absolute right-[-60px] z-[-2] top-[-10px]"
                      src={image1}
                      alt="dera"
                    />{" "}
                  </div>
                  <div className=" w-[160px] text-[15px] text-center font-bold uppercase py-[5px] rounded-r-[20px] italic mt-[8px] mb-[4px] bg-blue-100 bg-opacity-20">
                    <p>special Promo!!!</p>
                  </div>
                  <div className="w-[210px] pl-[20px] ">
                    <p className="text-[18px] font-semibold mb-[4px]">
                      All menswear
                    </p>
                    <h2 className="text-[20px] font-bold">50% Discount</h2>
                    <button className="mt-[10px] text-[20px] py-[8px] px-[17px] rounded-[20px] font-bold bg-blue-100 text-gray-800">
                      Buy Now
                    </button>
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className="pt-[15px] pr-[6px] pl-0 pb-[15px] rounded-[20px] relative overflow-hidden text-gray-300">
                  <i className="fa-solid fa-play absolute z-[-1] text-[21.3rem] -top-[76px] -left-[5px] live"></i>
                  <img
                    className="w-[280px] absolute right-[-60px] z-[-2] top-[-10px]"
                    src={image2}
                    alt="dera"
                  />
                  <div className="w-[160px] text-[15px] text-center font-bold uppercase py-[5px] rounded-r-[20px] italic mt-[8px] mb-[4px] bg-blue-100 bg-opacity-20">
                    <p>special Promo!!!</p>
                  </div>
                  <div className="w-[210px] pl-[20px]">
                    <p className="text-[18px] font-semibold mb-[4px]">
                      All femaleswear
                    </p>
                    <h2 className="text-[20px] font-bold">50% Discount</h2>
                    <button className="mt-[10px] text-[20px] py-[8px] px-[17px] rounded-[20px] font-bold bg-blue-100 text-gray-800">
                      Buy Now
                    </button>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="pt-[15px] pr-[6px] pl-0 pb-[15px] rounded-[20px] relative overflow-hidden text-gray-300">
                  <i className="fa-solid fa-play absolute z-[-1] text-[21.3rem] -top-[76px] -left-[5px] live"></i>
                  <img
                    className="w-[287px] absolute right-[-60px] z-[-2] top-[-10px]"
                    src={image3}
                    alt="dera"
                  />
                  <div className=" w-[160px] text-[15px] text-center font-bold uppercase py-[5px] rounded-r-[20px] italic mt-[8px] mb-[4px] bg-blue-100 bg-opacity-20">
                    <p>special Promo!!!</p>
                  </div>
                  <div className="w-[210px] pl-[20px]">
                    <p className="text-[18px] font-semibold mb-[4px]">
                      {" "}
                      Perfumes
                    </p>
                    <h2 className="text-[20px] font-bold">80% Discount</h2>
                    <button className="mt-[10px] text-[20px] py-[8px] px-[17px] rounded-[20px] font-bold bg-blue-100 text-gray-800">
                      Buy Now
                    </button>
                  </div>
                </div>
              )}
              {index === 3 && (
                <div className="pt-[15px] pr-[6px] pl-0 pb-[15px] rounded-[20px] relative overflow-hidden text-gray-300">
                  <i className="fa-solid fa-play absolute z-[-1] text-[21.3rem] -top-[76px] -left-[5px] live"></i>
                  <img
                    className="w-[287px] h-[200px] absolute right-[-60px] z-[-2] top-[0px]"
                    src={image4}
                    alt="dera"
                  />
                  <div className=" w-[160px] text-[15px] text-center font-bold uppercase py-[5px] rounded-r-[20px] italic mt-[8px] mb-[4px] bg-blue-100 bg-opacity-20">
                    <p>special Promo!!!</p>
                  </div>
                  <div className="w-[210px] pl-[20px]">
                    <p className="text-[18px] font-semibold mb-[4px]">
                      Accessories
                    </p>
                    <h2 className="text-[20px] font-bold">10% Discount</h2>
                    <button className="mt-[10px] text-[20px] py-[8px] px-[17px] rounded-[20px] font-bold bg-blue-100 text-gray-800">
                      Buy Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className=" flex justify-center mb-[1.2rem] absolute z-1 bottom-[10px] right-[10px]">
          {Array.from({ length: 4 }, (_, index) => {
            return (
              <div
                key={index}
                className={`dots ${index === sliderValue ? "active" : ""}`}
                onClick={() => setSliderValue(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuSlider;
