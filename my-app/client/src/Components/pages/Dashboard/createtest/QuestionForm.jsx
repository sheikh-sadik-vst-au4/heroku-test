import React from "react";

const QuestionForm = (props) => {
  return (
    <div className="col-10 mx-auto">
      <div className="card mt-1 mb-3">
        <div className="card-body">
          <h3 className="heading-color text-center">Please Add Question</h3>
          <hr></hr>
          <form className="question-form" onSubmit={props.addQuestion}>
            <div className="row form-group">
              <div className="col-md-2">
                <label className="lable-className">Question :</label>
              </div>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control user-input"
                  name="question"
                  onChange={props.questionInput}
                ></input>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-2 text-center">
                <label className="lable-className">A.</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control user-input"
                  name="option1"
                  onChange={props.questionInput}
                ></input>
              </div>
              <div className="col-md-2 text-center">
                <label className="lable-className">B.</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control user-input"
                  name="option2"
                  onChange={props.questionInput}
                ></input>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-2 text-center">
                <label className="lable-className">C.</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control user-input"
                  name="option3"
                  onChange={props.questionInput}
                ></input>
              </div>
              <div className="col-md-2 text-center">
                <label className="lable-className">D.</label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control user-input"
                  name="option4"
                  onChange={props.questionInput}
                ></input>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-2 text-center">
                <label className="lable-className">Answer</label>
              </div>
              <div className="col-md-4">
                <select
                  className="form-control"
                  name="answer"
                  onChange={props.questionInput}
                >
                  <option>{props.optionsValue.option1}</option>
                  <option>{props.optionsValue.option2}</option>
                  <option>{props.optionsValue.option3}</option>
                  <option>{props.optionsValue.option4}</option>                  
                </select>
              </div>
              <div className="col-md-2 text-center">
                <label className="lable-className">Marks</label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control user-input"
                  name="marks"
                  onChange={props.questionInput}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 ml-auto">
                <input
                  type="submit"
                  className="btn btn-block btn-primary"
                  value="Add Question"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
