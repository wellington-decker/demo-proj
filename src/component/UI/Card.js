import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const style = props.className;
  return <div className={`${classes["card"]} ${style}`}>{props.children}</div>;
};

export default Card;
