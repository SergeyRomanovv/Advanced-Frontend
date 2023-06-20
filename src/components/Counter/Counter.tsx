import React, { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [count, setcCount] = useState(0);

  const increment = () => {
    setcCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};
