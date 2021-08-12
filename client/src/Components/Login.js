import { NavLink } from "react-router-dom";

export function Login() {
  return (
    <div className="container-login">
      <div className="container-login-form">
        <h1 className="login-heading">Login</h1>
        <form className="form form-login">
          <div>
            <label className="form-label">
              Username
              <input className="form-input" type="text" />
            </label>
          </div>
          <div>
            <label className="form-label">
              Password
              <input className="form-input" type="text" />
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
