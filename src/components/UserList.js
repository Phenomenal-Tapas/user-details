import React from "react";
import Card from "./common/Card";
import { DISPLAY, YEARS } from "./constants/constants";
import classes from "./styles/UserList.module.css";

const UserList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.length > 0 ? (
          users.map((user, index) => (
            <li key={index}>
              {user.name} ({user.age} {YEARS})
            </li>
          ))
        ) : (
          <h2>{DISPLAY}</h2>
        )}
      </ul>
    </Card>
  );
};

export default UserList;
