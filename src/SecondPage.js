import React from "react";

const SecondPage = () => {
  return (
    <>
      <div className="container my-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Actions</th>
              <th scope="col">Report Name</th>
              <th scope="col">CIO LOB</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">No of Applications</th>
              <th scope="col">Type of Report</th>
              <th scope="col">Relies on CIB ITGC Report</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="bi bi-pencil" style={{ cursor: "pointer" }}></i>
                &nbsp; &nbsp;
                <i
                  className="bi bi-clock-history"
                  style={{ cursor: "pointer" }}
                ></i>
              </td>
              <td>
                <select name="reports" id="reports">
                  <option value="Test_SOC_1">Test_SOC_1</option>
                  <option value="Test_SOC_2">Test_SOC_2</option>
                  <option value="Test_SOC_3">Test_SOC_3</option>
                  <option value="Test_SOC_4">Test_SOC_4</option>
                  <option value="Test_SOC_5">Test_SOC_5</option>
                </select>
              </td>
              <td>CB</td>
              <td>11/16</td>
              <td>12/16</td>
              <td>1</td>
              <td>SOC1</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        {/* Second table */}
        <table
          className="table "
          style={{ width: "700px", margin: "30px auto" }}
        >
          <thead>
            <tr>
              <th scope="col">App ID</th>
              <th scope="col">App Name</th>
              <th scope="col">LOB</th>
              <th scope="col">State </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>16513</td>
              <td>CCAP - Banking(MTS,BTR,CTS)</td>
              <td>CIB</td>
              <td>Operate</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SecondPage;
