import React, { useState } from "react";
import State from "./components/State";
import UseEffects from "./components/useEffects";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    // setTimeout(() => setCount(count + 1), 1000);
    setTimeout(() => setCount((state) => state + 1), 1000);
  };

  const handleDecrease = () => {
    setTimeout(() => setCount(count - 1), 1000);
    // setCount(count - 1);
  };

  return (
    <div>
      {/* <State /> */}
      {/* <h2>Count: {count}</h2>
      <div>
        <button type="button" onClick={handleIncrease}>
          Increment
        </button>
        <button type="button" onClick={handleDecrease}>
          Decrement
        </button>
      </div> */}

      {/* UseEffect  */}
      <UseEffects />
    </div>
  );
};

export default App;
