import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1"
  //   );

  //   const data = await response.json();

  //   console.log(data)
  // };

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // console.log(response.data[0]);
  };

  const getImageData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data)
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={getImageData}>Get Images</button>

      <div>
        {data.map(function(ele, idx) {
          return <h3>Hello, {ele.author} {idx}</h3>
        })}
      </div>
    </div>
  );
};

export default App;
