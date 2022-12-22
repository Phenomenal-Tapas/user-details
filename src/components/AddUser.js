import React, { useState } from "react";
import Card from "./common/Card";
import Form from "./common/Form";
import Modal from "./common/Modal";
import classes from "./styles/AddUser.module.css";

const AddUser = (props) => {
  const [isError, setIsError] = useState();

  const onCloseModal = () => {
    setIsError(null);
  };

  return (
    <div>
      {isError && (
        <Modal
          title={isError.title}
          message={isError.message}
          onCloseModal={onCloseModal}
        />
      )}
      <Card className={classes.input}>
        <Form addUserHandler={props.onAddUser} setIsError={setIsError} />
      </Card>
    </div>
  );
};

export default AddUser;
