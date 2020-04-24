import React, { Component } from "react";
import "./Signup.css";
import Navbar from "../../basic/Navbar";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import swal from 'sweetalert';
class SignUp extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    success: false,
  };

  signupHandler = async (event) => {
    event.preventDefault();

    const { firstname, lastname, email, password } = this.state;

    const user = {
      firstname,
      lastname,
      email,
      password,
    };

    await axios.post(`/signup`, { user }).then((res) => {
      if (res.data.status) {
        swal('Congratulations!!',`${res.data.message}`,'success');
        this.setState({
          success: res.data.status,
        });
      } else {
        swal('Error!!',`${res.data.message}`,'error');
        //alert(res.data.message);
      }
    });
  };

  render() {
    if (this.state.success) {
      return <Redirect to="/sign-in"></Redirect>;
    }

    return (
      <div className="signup-wrapper">
        <Navbar />
        <div className="signup-inner w3-animate-opacity">
          <h3 className="heading-color">Sign-Up</h3>
          <hr></hr>
          <div>
          <form onSubmit={this.signupHandler} className="subscribe-form">
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter here"
                    onChange={(event) => {
                      this.setState({ firstname: event.target.value });
                    }}
                    required
                  ></input>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter here"
                    onChange={(event) => {
                      this.setState({ lastname: event.target.value });
                    }}
                    required
                  ></input>
                </div>
              </div>
           </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="ex. bruce@wayne.com "
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
                required
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password "
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
                required
              ></input>
            </div>
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Sign-Up"
            />
          </form>
          <hr></hr>
          <p className="forgot-password text-center pb-0 pt-0">
            Already have an account?<Link to="/sign-in">Sign-in here</Link>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

export default SignUp;
