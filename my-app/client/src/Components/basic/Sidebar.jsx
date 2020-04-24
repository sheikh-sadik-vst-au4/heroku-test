import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
class Sidebar extends Component {
  // navigateTo = (path) => {
  //   this.props.history.push(path);
  // };

  render() {
    return (
      <React.Fragment>
        <nav id="sidebar" className="bg-light" style={{ background: 'linear-gradient(to top, #003E86, #26d0ce)'}}>
          <div className="p-4 pt-5 container text-capitalize">
            <div>
              <h1 className='text-center text-light'>
                           Test-Mania               
               </h1>
              <hr></hr>
            </div>
            <div className="mx-auto text-center">
              <img
                className="rounded-circle"
                src="https://i7.pngguru.com/preview/557/749/125/computer-icons-avatar-user-profile-blog-personal-vector.jpg"
                height="100px"
                width="100px"
                alt=""
              ></img>
              <h5 className="text-light mt-3">hey {this.props.name}</h5>
            </div>
            <hr></hr>
            <ul className="list-unstyled components">
              <li>
                <NavLink
                  to="/dashboard"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#ffa500 !important",
                  }}
                >
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-test"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <i className="fas fa-plus-square"></i> Add Test
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/test-history"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <i className="fas fa-history"></i> Test History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <i className="fas fa-user-circle"></i> Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/results"
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  <i className="fas fa-poll"></i> Results
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <button className="btn  btn-block">
              <NavLink to="/logout" className="text-danger">
              <b>Log Out</b> <i className="fas fa-sign-out-alt"></i>
              </NavLink>
            </button>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Sidebar;
