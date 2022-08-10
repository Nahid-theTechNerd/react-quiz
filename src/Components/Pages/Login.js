import React from "react";
import { Link } from "react-router-dom";
import illustration from "../../assets/images/login.svg";
import classes from "../../styles/SignUp.module.css";

export default function Login() {
  return (
    <div className="container">
      <h1>Login to your account</h1>
      <div className="column">
        <div className={classes.illustration}>
          <img src={illustration} alt="Login" />
        </div>
        <form className={`${classes.login} ${classes.form}`} action="#">
          <div className={classes.textInput}>
            <input type="text" placeholder="Enter email" />
            <span className="material-icons-outlined"> alternate_email </span>
          </div>

          <div className={classes.textInput}>
            <input type="password" placeholder="Enter password" />
            <span className="material-icons-outlined"> lock </span>
          </div>

          <button className={classes.button}>
            <span>Submit now</span>
          </button>

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </form>
      </div>
    </div>
  );
}
