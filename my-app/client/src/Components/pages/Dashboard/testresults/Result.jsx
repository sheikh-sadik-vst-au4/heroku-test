import React, { Component } from "react";
import "./Result.css";
import app from "../../../../appsBasic";
import axios from "axios";
import TestList from "./testList";
import Tests from "../../../model/collection/test";

class Result extends Component {
  state = {
    testDetails: null,
    testId:null,
    openTest: null,
  };

  componentDidMount() {
    this.fetchTest();
  }

  fetchTest = () => {
    axios
      .get(`/user/read/${app.getUserId()}`)
      .then((response) => {
        this.setState({
          testDetails: new Tests(response.data.tests),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  openResult = (e) => {
    const testId = e.target.value;
    this.setState({
      openTest : testId
    });
   }
   closeResult = (e) => {
    this.setState({
      openTest : null
    });
   }


  viewHandler = () => {
    if (!this.state.testDetails) {
      return (
        <div>
          <h1>no test</h1>
        </div>
      );
    } else {
      return (
        <TestList
          isExpand={this.state.openTest}
          testDetails={this.state.testDetails}
          openResult={this.openResult}
          closeResult={this.closeResult}
          {...this.state}
        >
        </TestList>
      );
    }
  };
  render() {
    return <React.Fragment>{this.viewHandler()}</React.Fragment>;
  }
}

export default Result;
