import React from "react";

const LiftingStateChild = ({ data }) => {
  const handleClick = () => {
    data("Hello from Child Component");
  };
  return (
    <div>
      <h1>Lifting State from child to parent</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default LiftingStateChild;
