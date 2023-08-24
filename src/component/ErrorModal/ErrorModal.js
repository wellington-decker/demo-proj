import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";

const ErrorModal = (props) => {
  return (
    <Card className={classes["error-modal"]}>
      <p className={classes.error}>{props.message}</p>
      <button className={classes["error-confirm"]} onClick={props.onClick}>
        OK
      </button>
    </Card>
  );
};

export default ErrorModal;
