import React from "react";
import "./css/loader.css";
type Props = {};

function Loader({}: Props) {
  return (
    <div className="loader">
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
    </div>
  );
}

export default Loader;
