import React, { Component } from "react";
import HistoryTable from "./HistoryTable";
import app from "../../../../appsBasic";
import Tests from "../../../model/collection/test";
import Axios from "axios";

class HistoryContainer extends Component {
  state = {
    testHistory: null,
    result: null,
  };

  componentDidMount() {
    this.fetchTest();
  }

  fetchTest = () => {
    Axios.get(`/user/read/${app.getUserId()}`)
      .then((response) => {
        const result = new Tests(response.data.tests.reverse());
        this.setState({
          testHistory: result.getTests(),
          result: result,
        });
      })
      .catch((error) => console.log(error));
  };

  editHandler = (testName, testId) => {
    app.setTestId(testId);
    app.setTestName(testName);
  };

  deleteHandler = async (testName, testId) => {
    await Axios.delete(`/test/delete/${testId}`)
      .then((response) => {
        if (response.status === 200) {
          app.removeTestId();
          app.removeTestName();
          this.fetchTest();
        }
      })
      .catch((error) => console.log(error));
  };

  unpublishTest = (testId, index) => {
    const test = {
      _id: testId,
      publish: false,
    };

    Axios.put(`/test/update/${testId}`, test)
      .then((response) => {
        const testHistory = this.state.result.updateTestStatusOf(index);
        this.setState({ testHistory });
      })
      .catch((error) => console.log(error));
    return null;
  };

  publishTest = (testId, index) => {
    const test = {
      _id: testId,
      publish: true,
    };
    Axios.put(`/test/update/${testId}`, test)
      .then((response) => {
        const testHistory = this.state.result.updateTestStatusOf(index);
        this.setState({ testHistory });

        app.removeTestName();
        app.removeTestId();
        app.removeIsDisplay();
      })
      .catch((error) => console.log(error));
    return null;
  };

  veiwHandler() {
    if (!this.state.testHistory) {
      return (
        <div>
          <h1>no test yet please creare one</h1>
        </div>
      );
    } else {
      return (
        <HistoryTable
          totalTest={this.state.testHistory}
          editTest={this.editHandler}
          deleteTest={this.deleteHandler}
          publishTest={this.publishTest}
          unpublishTest={this.unpublishTest}
        />
      );
    }
  }

  render() {
    return <div className="container">{this.veiwHandler()}</div>;
  }
}

export default HistoryContainer;
