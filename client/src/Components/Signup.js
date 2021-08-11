import { useReducer } from "react";

export function Signup() {
  return (
    <div className="container-login">
      <div className="container-login-form">
        <h1 className="login-heading">Signup</h1>
        <form className="form form-login">
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
    </div>
  );
}
