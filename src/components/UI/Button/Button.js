import React from "react";
import classes from "./Button.module.css";
const button = (props) => (
  //btnType must be either Success or Danger
  <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
