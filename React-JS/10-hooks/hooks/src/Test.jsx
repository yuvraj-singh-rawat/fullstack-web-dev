import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Test = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  // const [num, setNum] = useState(0);
  // const [num2, setNum2] = useState(100);

  // useEffect(() => {
  //   console.log("UseEffect is Running");
  // }, []);

  function aChange() {
    console.log("A value changed");
  }

  function bChange() {
    console.log("B value changed");
  }

  useEffect(() => {
    aChange()
    console.log('use effect is running....')
  }, [a, b])

  return (
    <div>
      {/* <h1>Num : {num}</h1>
      <h1>Num2 : {num2}</h1>

      <button
        onMouseEnter={() => {
          setNum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2 + 10);
        }}
      >
        Hover
      </button> */}

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() => setA(a+1)}>Change A</button>
      <button onClick={() => setB(b-1)}>Change B</button>
    </div>
  );
};

export default Test;
