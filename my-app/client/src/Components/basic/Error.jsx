import React from "react";

const Error = (props) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 mx-auto mt-5">
          <div className="card">
            <div className="card-body text-capitalize">
              <h1 className="text-danger text-center">{props.message}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
