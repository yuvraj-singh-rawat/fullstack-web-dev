import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input type="text" placeholder="Enter Age" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
