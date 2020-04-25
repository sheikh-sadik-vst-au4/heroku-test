import React, { Component } from "react";
import TestForm from "./TestForm";
import QuestionForm from "./QuestionForm";
import Showtest from "./Showtest";
import PublishTest from "./PublishTest";
import axios from "axios";
import app from "../../../../appsBasic";
import swal from "sweetalert";

class AddTest extends Component {
  state = {
    userId: app.getUserId(),
    testName: app.getTestName(),
    isPublished: false,
    testId: app.getTestId(),
    questionId: null,
    question: null,
    option1: null,
    option2: null,
    option3: null,
    option4: null,
    answer: null,
    marks: null,
    questionPaper: null,
    totalMarks: null,
    showModal: false,
  };

  fetchTotal = () => {
    let total = this.state.questionPaper.slice();
    let totalPoint = [];
    if (total) {
      total.map((item) => {
        return totalPoint.push(item.marks);
      });
    }
    let totalCopy = totalPoint.reduce((acc, curr) => {
      return (acc = acc + curr);
    }, 0);

    this.setState({
      totalMarks: totalCopy,
    });
  };

  componentDidMount() {
    this.fetchTest();
  }

  fetchTest = async () => {
    await axios
      .get(`/test/read/${app.getTestId()}`)
      .then((response) => {
        this.setState({
          questionPaper: response.data.questions,
        });
      })
      .then(() => {
        this.fetchTotal();
      })
      .catch((error) => console.log(error));
  };

  addTestHandler = async (event) => {
    event.preventDefault();
    const testDetails = {
      id: this.state.userId,
      name: this.state.testName,
      publish: this.state.isPublished,
    };
    if (!this.state.testName) {
      swal("Test Name is Required", "Something Went wrong!!", "error");
    } else {
      await axios
        .post("/test/create", testDetails)
        .then((response) => {
          if (response.status === 200) {
            swal("Test Created!", "Please Add Questions", "success").then(
              () => {
                app.setTestId(response.data.test._doc._id);
                app.setTestName(response.data.test._doc.name);
                this.setState({
                  testId: response.data.test._doc._id,
                  testName: response.data.test._doc.name,
                });
              }
            );
          }
        })
        .catch((error) => console.log(error));
    }
  };

  addQuestionHandler = async (event) => {
    event.preventDefault();
    const question = {
      testId: this.state.testId,
      question: this.state.question,
      options: {
        option1: this.state.option1,
        option2: this.state.option2,
        option3: this.state.option3,
        option4: this.state.option4,
      },
      answer: this.state.answer,
      marks: this.state.marks,
    };

    await axios
      .post("/question/create", question)
      .then((response) => {
        if (response.status === 200) {
          swal("Success!!", "Question Added", "success").then(() => {
            this.fetchTest();
          });
        }
      })
      .catch((error) => console.log(error));
  };

  testInputHandler = (event) => {
    this.setState({
      testName: event.target.value,
    });
  };

  questionInputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  questionDeleteHandler = async (questionId) => {
    await axios
      .delete(`/question/delete/${questionId}`)
      .then((response) => {
        if (response.status === 200) {
          this.fetchTest();
        }
      })
      .catch((error) => console.log(error));
  };

  saveHandler = () => {
    swal({
      title: "TEST SAVED!",
      icon: "success",
      button: "OK",
      timer: 2000,
    }).then(() => {
      app.removeTestName();
      app.removeTestId();
      this.setState({
        testName: null,
        testId: null,
        questionPaper: null,
      });
    });
    //window.location.reload();
  };

  saveAndPublishHandler = async () => {
    const test = {
      _id: app.getTestId(),
      publish: true,
      totalmarks: this.state.totalMarks,
      url: `${window.location.origin}/test/${app.getTestId()}`,
    };

    await axios
      .put(`/test/update/${app.getTestId()}`, test)
      .then((response) => {
        if (response.status === 200) {
          swal({
            title: "Save & Publish!",
            icon: "success",
            button: "OK",
            timer: 2000,
          }).then(() => {
            app.setTestUrl(`${window.location.origin}/test/${app.getTestId()}`);
            this.setState({
              isPublished: response.data.publish,
            });
            app.removeTestName();
            app.removeTestId();
          });
        }
      })
      .catch((error) => console.log(error));
  };

  showModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  editQuestion = (id) => {
    this.setState({
      questionId: id,
    });
  };

  viewHandler = () => {
    const options = {
      option1: this.state.option1,
      option2: this.state.option2,
      option3: this.state.option3,
      option4: this.state.option4,
    };

    if (!this.state.testId) {
      return (
        <TestForm
          addTest={this.addTestHandler}
          testInput={this.testInputHandler}
        />
      );
    } else if (this.state.isPublished) {
      return <PublishTest />;
    } else {
      return (
        <React.Fragment>
          <QuestionForm
            addQuestion={this.addQuestionHandler}
            questionInput={this.questionInputHandler}
            optionsValue={options}
          ></QuestionForm>
          {!this.state.questionPaper ? null : (
            <Showtest
              testName={this.state.testName}
              testQuestion={this.state.questionPaper}
              totalMarks={this.state.totalMarks}
              modalState={this.state.showModal}
              questionId={this.state.questionId}
              showModal={this.showModal}
              editQuestion={this.editQuestion}
              deleteQuestion={this.questionDeleteHandler}
              save={this.saveHandler}
              saveAndPublish={this.saveAndPublishHandler}
              fetchTest={this.fetchTest}
            />
          )}
        </React.Fragment>
      );
    }
  };

  render() {
    return <div>{this.viewHandler()}</div>;
  }
}

export default AddTest;
