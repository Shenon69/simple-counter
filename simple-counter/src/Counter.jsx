import React from "react";
import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  const reset = () => [setCount(0)];

  return (
    <div className="Container-base">
        <div className="Container">
      <h1>Counter</h1>
      <div className="display-count">
        <h2>{count}</h2>
      </div>
      <div className="btn-container">
        <button className="inc-btn" onClick={inc}>Increment</button>
        <button className="reset-btn" onClick={reset}>Reset</button>
        <button className="dec-btn" onClick={dec}>Decrement</button>
      </div>
      </div>
    </div>
  );
}

export default Counter;
