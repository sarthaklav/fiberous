import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Signup() {
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  function HandleSignupSubmit(event) {
    // signup logic here
    console.log("signup form submitted");

    event.preventDefault();
  }
  return (
    <div className="container-signup">
      <div className="container-signup-form">
        <h1 className="signup-heading">Signup</h1>
        <form
          className="form form-signup"
          onSubmit={(event) => HandleSignupSubmit(event)}
        >
          <div>
            <label className="form-label">
              Full name
              <input
                onChange={(event) => setFullname(event.target.value)}
                className="form-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label className="form-label">
              Username
              <input
                onChange={(event) => setUsername(event.target.value)}
                className="form-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label className="form-label">
              Password
              <input
                onChange={(event) => setPassword(event.target.value)}
                className="form-input"
                type="text"
              />
            </label>
          </div>
          <div>
            <label className="form-label">
              Confirm Password
              <input
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="form-input"
                type="text"
              />
            </label>
          </div>
          <div className="form-btn">
            <input className="btn btn-light" type="reset" />
            <input className="btn btn-secondary" type="submit" />
          </div>
        </form>
      </div>
      <div>
        <span className="signup-login-link">
          <NavLink to="/login">Already have an account! Login..</NavLink>
        </span>
      </div>
    </div>
  );
}
