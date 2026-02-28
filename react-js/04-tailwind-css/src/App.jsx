import React from "react";
import Page1 from "../components/page1/Page1";
import Page2 from "../components/page2/Page2";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
      intro: "",
      color: "blue",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      intro: "",
      color: "green",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=776",
      intro: "",
      color: "orange",
      tag: "Underbanked",
    },
  ];

  return (
    <div className="">
      <Page1 users={users} />
      <Page2 />
    </div>
  );
};

export default App;
