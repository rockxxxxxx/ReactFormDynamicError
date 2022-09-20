import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errMsg, setErrmsg] = useState("");
  const [collegeErrMsg, setCollegeErrMsg] = useState("");
  const [collegeValue, setCollegeValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      setErrmsg("");
    } else {
      setErrmsg("Please enter a valid name");
    }
    setEnteredValue(event.target.value);
  };

  const collageInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      setCollegeErrMsg("");
    } else {
      setCollegeErrMsg("Please enter a valid college name");
    }
    setCollegeValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (collegeValue.trim().length === 0 || enteredValue.trim().length === 0) {
      setCollegeErrMsg("Please enter a valid college name");
      setErrmsg("Please enter a valid name");
      return;
    }
    props.onAddGoal(enteredValue, collegeValue);
    setCollegeValue("");
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "inValid" : ""}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
        <div style={{ color: "red" }}>{errMsg}</div>
        <label>College Name</label>
        <input
          type="text"
          onChange={collageInputChangeHandler}
          value={collegeValue}
        />
        <div style={{ color: "red" }}>{collegeErrMsg}</div>
      </div>
      <Button type="submit" isValid={isValid}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
