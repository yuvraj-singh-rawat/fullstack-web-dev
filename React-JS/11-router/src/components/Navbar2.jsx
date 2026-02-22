import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();
  return (
    <div className="py-3 px-5 bg-cyan-700">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return To Homepage
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
