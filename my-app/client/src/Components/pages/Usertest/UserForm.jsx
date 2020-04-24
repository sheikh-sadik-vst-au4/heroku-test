import React from "react";

const UserForm = (props) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 mx-auto mt-5">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center heading-color">User Name</h3>
              <form className="question-form" onSubmit={props.nameHandler}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter here"
                    onChange={props.inputHandler}
                  ></input>
                  <input
                    type="Submit"
                    className="btn btn-primary btn-block mt-3"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
