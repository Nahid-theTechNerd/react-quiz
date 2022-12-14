import React from "react";
import classes from "../styles/Quiz.module.css";

export default function MiniPlayer() {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span className={`material-icons-outlined ${classes.close}`}>
        {" "}
        close{" "}
      </span>
      <img src="./images/3.jpg" alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
