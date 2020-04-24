import React from "react";

const StudentResult = (props) => {
  if (props.studentResult) {
    console.log(props.studentResult.data.response);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {props.studentResult ? (
            <table className="table text-capitalize">
              <thead className="text-center">
                <tr>
                  <th>student name</th>
                  <th>Correct Question</th>
                  <th>total Question</th>
                  <th>obtain score</th>
                  <th>total score</th>
                  <th>percentage %</th>
                  <th>result</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>{props.studentResult.data.response.studentName}</td>
                  <td>
                    {
                      props.studentResult.data.response
                        .totalNumberOfCorrectAnswer
                    }
                  </td>
                  <td>
                    {props.studentResult.data.response.totalNumberOfQuestion}
                  </td>
                  <td>{props.studentResult.data.response.obtainedPoints}</td>
                  <td>{props.studentResult.data.response.totalPoints}</td>
                  <td>
                    {props.studentResult.data.response.obtainedPercentage}
                  </td>
                  {props.studentResult.data.response.resultStatus ? (
                    <td className="text-success">Pass</td>
                  ) : (
                    <td className="text-danger">Fail</td>
                  )}
                </tr>
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StudentResult;

// obtainedPercentage: 80
// obtainedPoints: 8
// resultStatus: true
// studentId: "5ea2869d68fca73c288afa5e"
// studentName: "sadik"
// testId: "5ea0103c43f994641830e5a0"
// totalNumberOfCorrectAnswer: 4
// totalNumberOfQuestion: 5
// totalPoints: 10
