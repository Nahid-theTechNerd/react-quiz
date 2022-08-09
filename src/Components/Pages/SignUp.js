import React from "react";
import illustration from "../../assets/images/signup.svg";
import classes from "../../styles/SignUp.module.css";

export default function SignUp() {
  return (
    <div className="container">
      <h1>Create an account</h1>
      <div className="column">
        <div className={classes.illustration}>
          <img src={illustration} alt="Signup" />
        </div>
        <form className={`${classes.signup} ${classes.form}`} action="#">
          <div className={classes.textInput}>
            <input type="text" placeholder="Enter name" />
            <span className="material-icons-outlined"> person </span>
          </div>

          <div className={classes.textInput}>
            <input type="text" placeholder="Enter email" />
            <span className="material-icons-outlined"> alternate_email </span>
          </div>

          <div className={classes.textInput}>
            <input type="password" placeholder="Enter password" />
            <span className="material-icons-outlined"> lock </span>
          </div>

          <div className={classes.textInput}>
            <input type="password" placeholder="Confirm password" />
            <span className="material-icons-outlined"> lock_clock </span>
          </div>

          <label>
            <input type="checkbox" />
            <span> I agree to the Terms & Conditions</span>
          </label>

          <div className={classes.button}>
            <span>Submit now</span>
          </div>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </form>
      </div>
    </div>
  );
}
