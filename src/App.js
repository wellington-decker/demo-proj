import React, { useState } from "react";
import classes from "./App.module.css";
import User from "./component/User/User";
import UserList from "./component/User/UserList";
import Card from "./component/UI/Card";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (inputList) => {
    setUserList((prevList) => {
      return [...prevList, inputList];
    });
  };

  const len = userList.length;
  const text = <p className={classes.text}>No data here</p>;
  return (
    <>
      <User onAddUser={addUserHandler} />
      <Card className={classes["list-container"]}>
        {len === 0
          ? text
          : userList.map((value) => (
              <UserList
                key={value.id}
                name={value.username}
                age={value.userAge}
              />
            ))}
      </Card>
    </>
  );
};

export default App;
