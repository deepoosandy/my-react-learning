import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError]=useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    //Adding validation

    if(enteredUsername.trim().length ===0 || enteredAge.trim().length===0){

      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age (non-empty values).'

      });
        return;
    }

    if(enteredAge < 1){
      setError({
        title:'Invalid age',
        message:'Please enter a valid age (>0).'

      });
        return;
    }

    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);

    //Reseting the fields after adding the users.
    setEnteredUsername('');
    setEnteredAge('');

  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHamdler=()=>{
      setError(null);
  };
  return (
<div>
    {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHamdler}></ErrorModel>}

    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />

        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
