import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Contexts/auth-context";

export function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { isLoggedIn } = useAuth();
  console.log("line 18", isLoggedIn);
  // console.log(`username is ${username}`);
  // console.log(`password is ${password}`);

  function HandleLoginSubmit(event) {
    // handle login logic
    console.log("line 8", isLoggedIn);
    console.log("login form is submitted");

    event.preventDefault();
  }
  return (
    <div className="container-login">
      <div className="container-login-form">
        <h1 className="login-heading">Login</h1>
        <form
          className="form form-login"
          onSubmit={(event) => HandleLoginSubmit(event)}
        >
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
          <div className="form-btn">
            <input className="btn btn-light" type="reset" />
            <input className="btn btn-secondary" type="submit" />
          </div>
        </form>
      </div>
      <div>
        <span className="signup-login-link">
          <NavLink to="/signup">Not signed up yet? Signup..</NavLink>
        </span>
      </div>
    </div>
  );
}
