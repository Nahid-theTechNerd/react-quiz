import React from "react";
import classes from "../styles/Quiz.module.css";

export default function Option({ id }) {
  return (
    <>
      <label className={classes.answer} for={id}>
        <input type="checkbox" id={id} /> A New Hope
      </label>
    </>
  );
}
