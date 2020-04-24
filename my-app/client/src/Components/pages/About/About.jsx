import React, { Component } from "react";
import Navbar from "../../basic/Navbar";
import Footer from "../../basic/Footer";
import { Link } from "react-router-dom";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container w3-container w3-center w3-animate-opacity">
          <div className="row">
            <div className="col-md-12 text-center p-3 mb-5 mt-5">
              <h1 className="display-3 text-center">About US</h1>
              <p>
                Test-Mania is an online test generator to help you create and
                manage your tests! Create, print and publish your tests online!
                Test-Mania makes it easy for you to perfectly format multiple
                question types, print alternate versions, and publish to the web
                for online tests. Online tests are automatically graded!
              </p>
              <Link to="/sign-up">
                <button type="button" className="btn btn-success">
                  Sign Up - It's Free
                </button>
              </Link>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4 mx-auto">
              <h1 className="text-center underline">Features</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-height">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Perfectly formatted tests
                  </h5>
                  <hr></hr>
                  <p className="card-text">
                    Create multiple choice, fill-in-the-blank, matching, short
                    answer and true or false questions. Add instructions and
                    divide your test into multiple sections.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-height">
                <div className="card-body">
                  <h5 className="card-title text-center">Question Pools</h5>
                  <hr></hr>
                  <p className="card-text">
                    Create a test with your entire question bank. Publish your
                    test and choose to present as few or as many questions as
                    you require. Each test taker will have a random set of
                    questions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-height">
                <div className="card-body">
                  <h5 className="card-title text-center text-capitalize">
                    Build exams with ease
                  </h5>
                  <hr></hr>
                  <p className="card-text">
                    Create an exam from your existing tests with just a few
                    clicks. At any time you can copy a question from one test to
                    another one! Each test taker will have a random set of
                    questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <div className="card card-height">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Online tests graded automatically
                  </h5>
                  <hr></hr>
                  <p className="card-text">
                    Published online tests are graded automatically. View and
                    print student's results and override grading when necessary.
                    The same test you print, is the same test you publish
                    online!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-height">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Question analysis reporting
                  </h5>
                  <hr></hr>
                  <p className="card-text">
                    Quick and easy reports to see how many test takers answered
                    which questions right and wrong.Each test taker will have a
                    random set of questions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-height">
                <div className="card-body">
                  <h5 className="card-title text-center text-capitalize">
                    Export to Word or PDF
                  </h5>
                  <hr></hr>
                  <p className="card-text">
                    Any test, any version, including answer sheets can be
                    download as a Micrsoft Word or PDF document to be saved and
                    printed later.Each test taker will have a random set of
                    questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-12 text-center p-3 mb-5 mt-5">
              <h2>Make the most of your time, sign up now for Test-Mania!</h2>
              <p>
                EasyTestMaker eliminates wasted time spent on formatting. Add
                new questions and sections, move them around as needed and let
                EasyTestMaker do the hard work for you. All your tests are saved
                for easy retrieval. You can make changes or print out additional
                copies of any test you create.
              </p>
              <Link to="/sign-up">
                <button type="button" className="btn btn-success">
                  Build Test Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default About;
