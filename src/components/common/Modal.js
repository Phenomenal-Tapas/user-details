import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "../styles/Modal.module.css";
import { OKAY } from "../constants/constants";

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onCloseModal} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onCloseModal}>{OKAY}</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
