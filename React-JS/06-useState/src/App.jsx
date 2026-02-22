import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  function increaseBy5() {
    setNum(num + 5);
  }

  function reset() {
    setNum(0);
  }

  return (
    <div>
      <div className="head">
        <h1>{num}</h1>
      </div>
      <div className="btn">
        <button onClick={increaseNum}>Increase</button>
        <button onClick={decreaseNum}>Decrease</button>
        <button onClick={increaseBy5}>Increase by 5</button>
      </div>

      <div className="resetBtn">
        <button onClick={reset}>Reset Now</button>
      </div>
    </div>
  );
};

export default App;
