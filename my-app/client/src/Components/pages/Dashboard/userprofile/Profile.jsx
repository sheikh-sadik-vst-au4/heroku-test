import React, { Component } from "react";
import axios from "axios";
import app from "../../../../appsBasic";
import "./Profile.css";
class Profile extends Component {
  state = {
    disabled: true,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  componentDidMount() {
    this.fetchProfile();
  }
  fetchProfile = () => {
    axios
      .get(`/user/read/${app.getUserId()}`)
      .then((response) => {
        let { firstname, lastname, email, password } = response.data;
        this.setState({
          firstname,
          lastname,
          email,
          password,
        });
      })
      .catch((error) => console.log(error));
  };

  editHandler = (event) => {
    event.preventDefault();
    this.setState({
      disabled: false,
    });
  };

  updateProfileHandler = (event) => {
    event.preventDefault();
    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .put(`/user/update/${app.getUserId()}`, { user })
      .then((response) => {
        if(response.status===200)
        {
          window.location.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1 className="profile-heading">user profile details</h1>
        <form onSubmit={this.updateProfileHandler}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.inputHandler}
              name="firstname"
              className="form-control"
              disabled={this.state.disabled ? "disabled" : ""}
              required
            ></input>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              className="form-control"
              onChange={this.inputHandler}
              disabled={this.state.disabled ? "disabled" : ""}
              required
            ></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              className="form-control"
              onChange={this.inputHandler}
              disabled={this.state.disabled ? "disabled" : ""}
              required
            ></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              className="form-control"
              onChange={this.inputHandler}
              disabled={this.state.disabled ? "disabled" : ""}
              required
            ></input>
          </div>
          <div>
            <button 
            className="btn btn-primary" 
            onClick={this.editHandler}
            disabled={!this.state.disabled ? "disabled" : ""}
            >
              Edit
            </button>
            <input
              type="submit"
              className="btn btn-primary ml-3"
              value="Save"
              disabled={this.state.disabled?"disabled":""}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Profile;
