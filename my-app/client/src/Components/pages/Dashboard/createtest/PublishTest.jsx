import React from "react";
import app from "../../../../appsBasic";
const PublishTest = (props) => {
  return (
    <div className="row">
      <div className="col-8 mx-auto">
        <div className="card">
          <div className="card-body">
            <h1 className="text-center heading-color text-capitalize">
              test url
            </h1>
            <hr></hr>
            <div className="form-group">
              <input
                type="text"
                value={app.getTestUrl()}
                className="form-control"
                disabled
              ></input>
              <button className="btn btn-primary mt-3 mx-auto">Copy Url</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishTest;
