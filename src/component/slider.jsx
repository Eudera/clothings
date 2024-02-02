import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const intervalIdRef = useRef(null);

  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value));
  };

  useEffect(() => {
    const autoSlide = () => {
      intervalIdRef.current = setInterval(() => {
        return setSliderValue((value) => (value + 1) % numberOFSlides);
      }, 5000);
    };
    autoSlide(); // run when the component is unmounted
    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalIdRef.current);
  }, []); // Empty dependency array since autoSlide doesn't depend on any external values

  const transforValue = `translateX(-${sliderValue * 100}%)`;

  const numberOFSlides = 3;
  return (
    <div>
      <div className="w-[90vw]  h-[95px] max-w-[80rem] flex rounded-md overflow-hidden mb-[16px] text-center m-auto items-center">
        {Array.from({ length: numberOFSlides }, (_, index) => {
          return (
            <div
              key={index}
              className={`slide ${index === sliderValue ? "actives" : ""}`}
              style={{ transform: transforValue }}
              onChange={handleSliderChange}
            >
              {index === 0 && (
                <p>
                  Lorem ipsum dolor sit amet adipisicing elit. Voluptas iusto
                  iste quaerat, deserunt magni nisi love me like i nnefff eo bea
                </p>
              )}

              {index === 1 && (
                <p>
                  adipisicing elit. Voluptas iusto natus minima iste quaerat,
                  deserunt magni nisi, deserunt magni nisi love me like i nnefff
                  eo bea
                </p>
              )}

              {index === 2 && (
                <p>
                  deserunt magni nisi love me like i nnefff eo bea Lorem ipsum
                  dolor sit amet consectetur minima iste quaerat, deserunt magni
                  nisi
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div className="indicator flex justify-center mb-[1.2rem]">
        {Array.from({ length: 3 }, (_, index) => {
          return (
            <div
              key={index}
              className={`dot ${index === sliderValue ? "active" : ""}`}
              onClick={() => setSliderValue(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
