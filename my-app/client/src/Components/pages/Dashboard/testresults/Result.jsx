import React, { Component } from "react";
import "./Result.css";
import app from "../../../../appsBasic";
import axios from "axios";
import TestList from "./TestList";
import Error from "../../../basic/Error";
import Tests from "../../../model/collection/test";

class Result extends Component {
  state = {
    testDetails: null,
    testId: null,
    openTest: null,
    showError: false,
  };

  componentDidMount() {
    this.fetchTest();
  }

  fetchTest = () => {
    axios
      .get(`/user/read/${app.getUserId()}`)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.tests.length === 0) {
            this.setState({
              showError: true,
            });
          } else {
            this.setState({
              testDetails: new Tests(response.data.tests),
            });
          }
        } else {
          this.setState({
            showError: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  openResult = (e) => {
    const testId = e.target.value;
    this.setState({
      openTest: testId,
    });
  };
  closeResult = (e) => {
    this.setState({
      openTest: null,
    });
  };

  viewHandler = () => {
    if (this.state.testDetails) {
      return (
        <TestList
          isExpand={this.state.openTest}
          testDetails={this.state.testDetails}
          openResult={this.openResult}
          closeResult={this.closeResult}
          {...this.state}
        ></TestList>
      );
    }

    if (this.state.showError) {
      return <Error message="no result"></Error>;
    }
  };

  render() {
    return <React.Fragment>{this.viewHandler()}</React.Fragment>;
  }
}

export default Result;
