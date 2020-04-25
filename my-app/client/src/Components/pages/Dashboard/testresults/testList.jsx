import React from "react";
import TestTable from "./ResultTable";
import ReactToExcel from "react-html-table-to-excel";

const testList = (props) => {
  return (
    <div>
      <h1 className="result-heading">Results</h1>
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {props.testDetails.getTests().map((item, index) => {
              return (
                <li className="list-group-item" key={index} name={item._id}>
                  {props.isExpand === item._id ? (
                    <button
                      className="btn btn-sm mr-2 text-danger"
                      value={item._id}
                      id={item._id}
                      onClick={props.closeResult}
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm text-success mr-2"
                      value={item._id}
                      onClick={props.openResult}
                      id={item._id}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  )}
                  <span className="text-capitalize" htmlFor={item._id}>
                    {item.name}
                  </span>
                  {props.isExpand === item._id ? (
                    <div>
                      <div className="mb-3 mt-3">
                        <ReactToExcel
                          className="btn btn-sm btn-primary"
                          table="result"
                          filename="result"
                          buttonText="Export"
                          sheet="sheet 1"
                        ></ReactToExcel>
                      </div>
                        <TestTable key={item._id} id={item._id}></TestTable>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default testList;
