import React from "react";

function ButtonOrder({ onClick = () => {}, title = "", className = "" }) {
  return (
    <button
      className={
        "font-peace-sans text-white py-3 px-5 z-20 text-capitalize background-button-lead " +
        className
      }
      onClick={onClick}>
      {title}
    </button>
  );
}

export default ButtonOrder;
