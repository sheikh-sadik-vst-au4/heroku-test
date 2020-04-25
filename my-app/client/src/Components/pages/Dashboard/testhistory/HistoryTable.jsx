import React from "react";
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

const HistoryTable = (props) => {
  return (
    <React.Fragment>
      <h1 className="profile-heading">Previous Tests</h1>
      <table className="table table-hover table-responsive mt-2">
        <thead className="text-center">
          <tr>
            <th scope="col">SR.</th>
            <th scope="col">NAME</th>
            <th scope="col">DATE & TIME</th> 
            <th scope="col">URL</th>
            <th scope="col">COPY</th>
            <th scope="col">STATUS</th>
            <th scope="col">CHANGE</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {props.totalTest.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <span className="badge badge-dark">{index + 1}</span>
                </td>
                <td>
                  <span className="text-capitalize">
                    {item.name}
                  </span>
                </td>
                <td>
                  <span className="">{item.time}</span>
                </td>
                {item.publish ? (
                  <td>
                    <a href={item.url} className="" target="_blank"  rel="noopener noreferrer">
                      {item.url}
                    </a>
                  </td>
                ) : (
                  <td>
                    <span>-</span>
                  </td>
                )}
                <td>
                  <button
                    className="btn btn-sm btn-primary text-capitalize"
                    disabled={item.publish ? false : true}
                    onClick={() => {
                      navigator.clipboard.writeText(item.url);
                      swal("copied","success","success");
                    }}
                  >
                    copy
                  </button>
                </td>
                {item.publish ? (
                  <td>
                    <span className="badge badge-success text-capitalize">
                      published
                    </span>
                  </td>
                ) : (
                  <td>
                    <span className="badge badge-danger text-capitalize">
                      unpublished
                    </span>
                  </td>
                )}
                {item.publish ? (
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger text-capitalize"
                      onClick={() => {
                        props.unpublishTest(item._id, index);
                      }}
                    >
                      unpublish
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      className="btn btn-sm btn-outline-success text-capitalize"
                      onClick={() => {
                        props.publishTest(item._id, index);
                      }}
                    >
                      publish
                    </button>
                  </td>
                )}
                <td>
                <Link to="/add-test">  <button
                    className="btn btn-sm btn-outline-info mr-2"
                    disabled={item.publish ? true : false}
                    onClick={() => {
                      props.editTest(item.name, item._id);
                    }}
                  >
                    <i className="far fa-edit"></i>
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger mr-2"
                    disabled={item.publish ? true : false}
                    onClick={() => {
                      props.deleteTest(item.name, item._id);
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default HistoryTable;
