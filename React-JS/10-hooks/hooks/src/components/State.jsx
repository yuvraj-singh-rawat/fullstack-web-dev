import React, { useState } from "react";

const State = () => {
  const [age, setAge] = useState(23);
  const [name, setName] = useState("Yuvraj");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  const [liked, setLiked] = useState(true);

  const [num, setNum] = useState(1);

  const [form, setForm] = useState({
    firstName: "Yuvraj",
    lastName: "Rawat",
    email: "yuvraj@gmail.com",
  });

  //   function handleClick() {
  //     setCount(count + 1);
  //   }

  //   function handleChange(e) {
  //     setText(e.target.value);
  //   }

  //   function handleChange(e) {
  //     setLiked(e.target.checked);
  //   }

  //   function handleAge() {
  //     setAge(a => a + 1);
  //     setAge(a => a + 1);
  //     setAge(a => a + 1);
  //   }

  function increment() {
    // setNum((n) => n + 1);
    setNum(num + 1);
  }

  return (
    <div>
      {/* <p>age: {age}</p>
      <p>name: {name}</p>

      <button onClick={handleClick}>You pressed me {count} times</button> */}

      {/* Text Field  */}
      {/* <div>
        <input type="text" value={text} onChange={handleChange} />
        <p>You typed: {text}</p>
        <button onClick={() => setText("Hello")}>Reset</button>
      </div> */}

      {/* Checkbox */}
      {/* <div>
        <label>
          <input type="checkbox" checked={liked} onChange={handleChange} /> i
          liked this
        </label>

        <p>You {liked ? "liked" : "did not like"} this.</p>
      </div> */}

      {/* Form */}
      {/* <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleAge}>Increment Age</button>
        <p>
          Hello {name}, You are {age}
        </p>
      </div> */}

      {/* <h1>Number is: {num}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>

      <button onClick={() => increment()}>+1</button> */}

      {/* Form Object  */}
      {/* <div>
        <label>
          First name:
          <input
            value={form.firstName}
            onChange={(e) => {
              setForm({ ...form, firstName: e.target.value });
            }}
          />
        </label>
        <label>
          Last name:
          <input
            value={form.lastName}
            onChange={(e) => {
              setForm({ ...form, lastName: e.target.value });
            }}
          />
        </label>
        <label>
          Email:
          <input
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
        </label>

        <p>
          {form.firstName} {form.lastName} {form.email}
        </p>

        <button
          onClick={() =>
            setForm({ ...form, email: "", firstName: "", lastName: "" })
          }
        >
          Reset Form
        </button>
      </div> */}
    </div>
  );
};

export default State;
