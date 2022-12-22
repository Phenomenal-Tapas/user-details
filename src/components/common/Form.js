import React, { useState } from "react";
import Button from "./Button";
import classes from "../styles/Form.module.css";
import { ADD_USER, AGE, USERNAME } from "../constants/constants";

const Form = ({ addUserHandler, setIsError }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setIsError({
        title: "Invalid Input!",
        message: "Please fill all the fields. (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setIsError({
        title: "Invalid Age!",
        message: "Please enter a valid age. (age not be less than 1)",
      });
      return;
    }

    addUserHandler(username, age);
    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.input}>
      <label htmlFor="username">{USERNAME}</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={handleChangeUsername}
      />
      <label htmlFor="age">{AGE}</label>
      <input type="number" id="age" value={age} onChange={handleChangeAge} />
      <Button type="submit">{ADD_USER}</Button>
    </form>
  );
};

export default Form;
