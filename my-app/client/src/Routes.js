import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from './Components/pages/Login/Login';
import SignUp from './Components/pages/Signup/Signup';
import Home from './Components/pages/Homepage/Home';
import Dashboard from './Components/pages/Dashboard/dashboardhome/Dashboard';
import Logout from './Components/pages/Logout/Logout';
import apps from './appsBasic';
import PropTypes from "prop-types";
import Sidebar from "./Components/basic/Sidebar";
import AddTest from "./Components/pages/Dashboard/createtest/AddTest";
import app from "./appsBasic";
//import TestHistory from "./Components/pages/Dashboard/testhistory/TestHistory";
import Profile from "./Components/pages/Dashboard/userprofile/Profile";
import Results from "./Components/pages/Dashboard/testresults/Result";
import About from './Components/pages/About/About';
import UserTest from './Components/pages/Usertest/UserContainer';
import ShowTest from './Components/pages/Dashboard/createtest/Showtest';
import History from './Components/pages/Dashboard/testhistory/HistoryContainer';

const Content = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/sign-in" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/" component={Home} />
      <Route path="/test/:id" component={UserTest} />
      <Route exact path="/about" component={About} />
      <RequiresAuthentication path="/dashboard" component={Dashboard} />
      <RequiresAuthentication path="/add-test" component={AddTest} />
      <RequiresAuthentication path="/test-history" component={History} />
      <RequiresAuthentication path="/profile" component={Profile} />
      <RequiresAuthentication path="/results" component={Results} />
      <RequiresAuthentication path="/show-test/:id" component={ShowTest} />
    </Switch>
  </BrowserRouter>
);

const RequiresAuthentication = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      apps.getToken() ? (
        <React.Fragment>
          <div className="d-md-flex align-items-stretch">
            <Sidebar {...props} name={app.getName()} />
            <div id="content" className="p-4 p-md-5 pt-5 bg-light">
              <Component {...props} />
            </div>
          </div>
        </React.Fragment>
      ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);
RequiresAuthentication.propTypes = {
  location: PropTypes.any,
  component: PropTypes.any
};

export default Content;
