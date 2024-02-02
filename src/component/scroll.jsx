import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowX: "scroll",
        display: "flex",
        gap: "7px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
