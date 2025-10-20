import React from "react";
// import { useState } from "react";
import LiftingStateChild from "./LiftingStateChild";

const LiftingStateParent = () => {
  const lifting = (greet) => {
    alert(greet);
  };
  return (
    <>
      <LiftingStateChild data={lifting} />
    </>
  );
};

export default LiftingStateParent;
