import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import app from "../../../appsBasic";
import "./Login.css";
import Navbar from "../../basic/Navbar";
import swal from "sweetalert";

class Login extends Component {
  state = {
    username: null,
    password: null,
    loggedin: null,
  };

  loginHandler = async (event) => {
    event.preventDefault();

    let { username, password } = this.state;

    const user = {
      emailaddress: username,
      password,
    };

    await axios
      .post("/login", { user })
      .then((response) => {
        if (response.data.status === 200) {
          app.setToken(response.data.token);
          app.setName(
            `${response.data.data.firstname} ${response.data.data.lastname}`
          );
          app.setUserId(response.data.data._id);

          this.setState({
            loggedin: app.getToken(),
          });
        } else {
          swal("Error", `${response.data.message}`,"error");
        }
      });
  };

  render() {
    if (this.state.loggedin) {
      return <Redirect to="/dashboard"></Redirect>;
    }
    return (
      <div className="signin-wrapper">
        <Navbar />
        <div className="signin-inner  w3-animate-opacity">
          <h3 className="heading-color">Sign-In</h3>
          <hr></hr>
          <form onSubmit={this.loginHandler} className="subscribe-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="ex. bruce@wyane.com"
                autoComplete="current-password"
                onChange={(event) => {
                  this.setState({ username: event.target.value });
                }}
                  required
                
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="enter password"
                autoComplete="current-password"
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
                required
              ></input>
            </div>
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Sign-In"
            />
            <p className="forgot-password text-right">Forgot password?</p>
          </form>
          <hr></hr>
          <p className="forgot-password text-center">
            Don't have an account?<Link to="/sign-up">Sign-Up here</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
