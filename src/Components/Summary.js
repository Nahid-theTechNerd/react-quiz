import React from "react";
import illlustration from "../assets/images/success.png";
import classes from "../styles/Result.module.css";

export default function Summary() {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={classes.badge}>
        <img src={illlustration} alt="Success" />
      </div>
    </div>
  );
}
