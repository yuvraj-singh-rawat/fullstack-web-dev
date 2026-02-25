import React from "react";

const App = () => {
  // Set Item
  // localStorage.setItem('user', 'yuvraj')
  // localStorage.setItem('age', '18')

  // Get Item
  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')

  // Remove Item
  // localStorage.removeItem('user')

  // Clear
  // localStorage.clear();
  // sessionStorage.clear();

  // console.log(user)
  // console.log(age)

  // const user = {
  //   username: "Yuvraj",
  //   age: 24,
  //   city: 'Ajmer'
  // }

  // localStorage.setItem('user', JSON.stringify(user))

  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
