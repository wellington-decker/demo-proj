import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const styling = props.className;

  return <div className={`${classes.modal} ${styling}`}>{props.children}</div>;
};

export default Modal;
