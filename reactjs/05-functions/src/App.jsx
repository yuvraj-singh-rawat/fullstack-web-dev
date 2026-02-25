import React from "react";

const App = () => {

  const btnClicked = () => {
    console.log("Button is Clicked")
  }

  function mouseEnter() {
    console.log("Mouse Entered")
  }

  return (
    <div>
      <h1>Hello World!</h1>

      {/* <button onMouseEnter={mouseEnter} onClick={btnClicked}>Search Now</button> */}

      <input placeholder="Enter Name" type="text" onChange={function (elem) {
        console.log(elem.target.value)
      }} />
    </div>
  );
};

export default App;
