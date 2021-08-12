import { NavLink } from "react-router-dom";
export function Signup() {
  return (
    <div className="container-signup">
      <div className="container-signup-form">
        <h1 className="signup-heading">Signup</h1>
        <form className="form form-signup">
          <div>
            <label className="form-label">
              Full name
              <input className="form-input" type="text" />
            </label>
          </div>
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
          <div>
            <label className="form-label">
              Confirm Password
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
          <NavLink to="/login">Already have an account! Login..</NavLink>
        </span>
      </div>
    </div>
  );
}
