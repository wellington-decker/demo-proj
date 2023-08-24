import React from "react";
import classes from "./User.module.css";
import Card from "../UI/Card";
import UserFormInput from "../UserFormInput.js/UserFormInput";

const User = (props) => {
  const getFormData = (data) => {
    const userData = {
      ...data,
      id: Math.random() * 10,
    };

    console.log(data);
    props.onAddUser(userData);
  };

  return (
    <Card className={classes.userInput}>
      <UserFormInput onClick={getFormData} />
    </Card>
  );
};

export default User;
