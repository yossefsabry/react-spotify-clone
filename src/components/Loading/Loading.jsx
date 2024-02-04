import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div style={{ color: "white" }} className="container-spinner">
      {" "}
      <div className="spinner-container">
        <div className="loading-spinner"></div>{" "}
      </div>
    </div>
  );
};

export default Loading;
