import React from "react";

const TestForm = (props) => {
  return (
    <div className="card mx-auto col-md-6 mt-5 card-dark color-blue-gradiant">
      <div className="card-body bubble-shadow">
        <form className="question-form" onSubmit={props.addTest}>
          <h3 className="text-center heading-color">Enter Test Name Here.</h3>
          <div className="form-group">
            <input
              className="form-control text-capitalize"
              type="text"
              placeholder="enter test name here"
              onChange={props.testInput}
            ></input>
          </div>
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="create"
          />
        </form>
      </div>
    </div>
  );
};

export default TestForm;
