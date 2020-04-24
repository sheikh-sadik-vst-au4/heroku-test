import React from "react";
import { NavLink} from "react-router-dom";
const Navbar = (props) => {

  if (props.token == null) {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <NavLink className="navbar-brand" to="/">
          Test-Mania
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sign-in">
                Log in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sign-up">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );

  } 
  else {
    
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <NavLink className="navbar-brand" to="/dashboard">
        Test-Mania
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item text-capitalize">
            <NavLink className="nav-link" to="/dashboard">
              hey {props.name}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Log out
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
};

export default Navbar;
