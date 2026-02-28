import React, { useState } from "react";

const Card = ({ user, desc, img, status, isOnline }) => {
  // without destructuring using Props
  // props.user, props.desc, props.img

  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="card">
        <img src={img} alt="" />
        <h1>{user}</h1>
        <p>{desc}</p>
        {/* Conditional Rendering */}

        {/* Ternary Operator Condition */}
        <p>
          {status} {isOnline ? " 🟢 " : " 🔴 "}
        </p>

        {/* && operator Condition */}
        {/* <p>
          {status} {isOnline && "🟢"}
        </p> */}

        <p>Your Total Networth is: ${count} Trillion</p>

        <button>View Profile</button>
        <br />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          style={{ margin: "10px", padding: "10px" }}
        >
          Increase Your Networth
        </button>
      </div>
    </div>
  );
};

export default Card;
