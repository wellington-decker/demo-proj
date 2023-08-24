import React from "react";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={classes["user-list__container"]}>
      <ul className={classes["user-list"]}>
        <li className={classes["list-output"]}>
          {props.name} {`${"(I am " + +props.age + " years old.)"}`}
        </li>
      </ul>
    </div>
  );
};

export default UserList;
