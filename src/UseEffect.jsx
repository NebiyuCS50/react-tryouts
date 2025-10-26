import React from "react";
import { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <h1>UseEffect Example</h1>
      <p>{count}: seconds have passed</p>
    </div>
  );
}
