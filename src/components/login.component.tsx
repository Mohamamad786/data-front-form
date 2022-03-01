import React, { Component } from "react";
export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control"  />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                </div>
                <p className="forgot-password text-center">
                    <a href="#">Forgot your password?</a>
                </p>
                <p className="signup-account text-center">
                    Don't have an account? <a href="/sign-up">Sign up</a>
                </p>
                <p className="resend-email text-center">
                    <a href="#">Resend email confirmation</a>
                </p>
            </form>
        );
    }
}