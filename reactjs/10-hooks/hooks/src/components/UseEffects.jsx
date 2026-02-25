import React, { useEffect, useState } from "react";

const UseEffects = () => {
  // const [toggle, setToggle] = useState(true);

  // const handleToggle = () => {
  //   setToggle(!toggle);
  // };

  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick");
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      {/* <button type="button" onClick={handleToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>} */}

      <p>Hlel</p>
    </div>
  );
};

export default UseEffects;
