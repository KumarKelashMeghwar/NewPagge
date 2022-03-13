import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import data from "./WholeData";
import "./AppStyle.css";
import { useState } from "react";

const App = () => {
  let [enabledId, setEnabledId] = useState(-1);
  let [stateData, setStateData] = useState(data);

  let [values, setValues] = useState({
    appId: "",
    appName: "",
    state: "",
    lob: "",
    jpmc_sox: "",
    jpmc_ccap: "",
    ssae_soci: "",
    pci: "",
    phi: "",
    glba: "",
    mnpi: "",
    hvbe: "",
  });

  const changeValue = (rowIndex, name, value) => {
    let row = stateData[rowIndex];
    row[name] = value;
    let stateCopy = [...stateData];
    stateCopy[rowIndex] = row;
    setStateData(stateCopy);
  };

  const eventHandler = (e) => {
    let [name, value] = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function toggleEnable(rowIndex) {
    if (enabledId === rowIndex) setEnabledId(-1);
    else setEnabledId(rowIndex);
  }

  return (
    <>
      <h4 className="text-center mt-3">Data table</h4> <br />
      <br />
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Actions</th>
              <th scope="col">App ID</th>
              <th scope="col">App Name</th>
              <th scope="col">State</th>
              <th scope="col">LOB</th>
              <th scope="col">JPMC SOX</th>
              <th scope="col">JPMC CCAP</th>
              <th scope="col">SSAE-SOCI</th>
              <th scope="col">PCI</th>
              <th scope="col">PHI</th>
              <th scope="col">GLBA</th>
              <th scope="col">MNPI</th>
              <th scope="col">HVBA</th>
            </tr>
          </thead>
          <tbody>
            {stateData.map((elem, index) => {
              values.appId = elem.appId;
              values.appName = elem.appName;
              values.state = elem.state;
              values.lob = elem.lob;
              values.jpmc_sox = elem.JPMC_SOX;
              values.jpmc_ccap = elem.JPMC_CCAP;
              values.ssae_soci = elem.SSAE_SOCI;
              values.pci = elem.PCI;
              values.phi = elem.PHI;
              values.glba = elem.GLBA;
              values.mnpi = elem.MNPI;
              values.hvbe = elem.HVBE;
              return (
                <tr key={index}>
                  <td>
                    <i
                      className={
                        elem.appId === enabledId
                          ? "bi bi-check2-circle"
                          : "bi bi-pencil"
                      }
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleEnable(index)}
                    ></i>
                    &nbsp; &nbsp;
                    <i
                      className="bi bi-clock-history"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                  <td>
                    <input
                      type="text"
                      disabled={index !== enabledId}
                      style={{ width: "50px" }}
                      name="appId"
                      value={values.appId}
                      onChange={(e) =>
                        changeValue(index, "appId", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.appName}
                      disabled={index !== enabledId}
                      style={{ width: "130px" }}
                      name="appName"
                      onChange={(e) => eventHandler(e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.state}
                      disabled={index !== enabledId}
                      style={{ width: "70px" }}
                      name="state"
                      onChange={(e) => eventHandler(e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.lob}
                      disabled={index !== enabledId}
                      style={{ width: "50px" }}
                      name="lob"
                      onChange={(e) => eventHandler(e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.jpmc_sox}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="jpmc_sox"
                      onChange={(e) => eventHandler(e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.jpmc_ccap}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="jpmc_ccap"
                      onChange={(e) => eventHandler(e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.ssae_soci}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="ssae_soci"
                      onChange={(e) => eventHandler(e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.pci}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="pci"
                      onChange={(e) => eventHandler(e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.phi}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="phi"
                      onChange={(e) => eventHandler(e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.glba}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="glba"
                      onChange={(e) => eventHandler(e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.mnpi}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="mnpi"
                      onChange={(e) => eventHandler(e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={values.hvbe}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="hvbi"
                      onChange={(e) => eventHandler(e)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
