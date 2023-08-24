import React, { useState, useRef } from "react";
import classes from "./UserFormInput.module.css";
import ErrorModal from "../ErrorModal/ErrorModal";
import Modal from "../UI/Modal";

const UserFormInput = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isModal, setIsModal] = useState(false);

  const nameInput = useRef();
  const ageInput = useRef();

  const formHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredAge = ageInput.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorMessage("Please enter a valid name and age (non-empty values).");
      setIsModal(true);
      return;
    } else if (
      enteredName.trim().length > 0 &&
      (enteredAge.trim().length <= 0 || +enteredAge <= 0)
    ) {
      setErrorMessage("Please enter a valid age (> 0).");
      setIsModal(true);
      return;
    }

    const formData = {
      username: enteredName.charAt(0).toUpperCase() + enteredName.slice(1),
      userAge: enteredAge,
    };

    props.onClick(formData);

    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const closeModalHandler = () => {
    setIsModal(false);
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <div className={classes.nameInput}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            className={classes.userName}
            ref={nameInput}
          />
        </div>
        <div className={classes.ageInput}>
          <label htmlFor="userAge">Age</label>
          <input
            type="number"
            id="userAge"
            className={classes.userAge}
            ref={ageInput}
          />
        </div>
        <div className={classes["btn-container"]}>
          <button type="submit" id="submit" className={classes["addUser-btn"]}>
            Add User
          </button>
        </div>
      </form>

      {isModal && (
        <Modal className={classes["center-modal"]}>
          <ErrorModal message={errorMessage} onClick={closeModalHandler} />
        </Modal>
      )}
    </div>
  );
};

export default UserFormInput;
  