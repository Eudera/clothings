import React from "react";

const Scroll2 = (pops) => {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "scroll",
        gap: "20px",
      }}
    >
      {pops.children}
    </div>
  );
};

export default Scroll2;
