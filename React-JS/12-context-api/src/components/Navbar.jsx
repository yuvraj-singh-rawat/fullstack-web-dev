import React, { useContext } from "react";
import Nav2 from "./Nav2";
import { PostDataContext } from "../context/ThemeContext";

const Navbar = (props) => {
  const data = useContext(PostDataContext);
    console.log(data)
  return (
    <div className="nav">
      <h2>{data}</h2>

      <div>
        <Nav2 theme={props.theme} />
      </div>
    </div>
  );
};

export default Navbar;
