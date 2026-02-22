import React from "react";
import Card from "./components/Card";

const App = () => {
  const users = ["Yuvraj", "Elon", "Mark", "Bill", "Jeff"];

  return (
    <>
      <div className="outer">
        <div className="parent">
          <Card
            user="Yuvraj Singh"
            desc="Richest & Most Powerful Person of Earth"
            status="online"
            isOnline={true}
            img="https://images.unsplash.com/photo-1671038003907-dcb7673fd8d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
          />
          <Card
            user="Elon Musk"
            desc="CEO of Tesla"
            status="online"
            isOnline={true}
            img="https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg"
          />
          <Card
            user="Mark Zuckerberg"
            desc="CEO of Meta"
            status="online"
            isOnline={true}
            img="https://lookaside.fbsbx.com/elementpath/media/?media_id=323764547398564&version=1760013275"
          />
          <Card
            user="Bill Gates"
            desc="Founder of Microsoft"
            status="offline"
            isOnline={false}
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjL8YNXniDUieCj7DYAYqd9UWPC-zqvlj2uQ&s"
          />
          <Card
            user="Jeff Bezos"
            desc="CEO of Amazon"
            status="online"
            isOnline={true}
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgcMXgjgzOqFm_ZiFtk07q2ZKiWanW8gPQA&s"
          />
          <Card
            user="Steve Jobs"
            desc="CEO of Apple"
            status="offline"
            isOnline={false}
            img="https://imageio.forbes.com/specials-images/imageserve/5b8576db31358e0429c734e3/0x0.jpg?format=jpg&crop=2170,2172,x211,y900,safe&height=416&width=416&fit=bounds"
          />
        </div>

        <ul>
          {users.map((users, index) => (
            <li key={index}>{users}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
