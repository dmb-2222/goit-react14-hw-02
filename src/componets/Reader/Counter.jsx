import React from "react";

const Counter = ({ currentPage, publicationsLength }) => {
  return (
    <p className="counter">
      {currentPage}/{publicationsLength}
    </p>
  );
};
export default Counter;
