import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import data from "./../../WholeData";
import { useState } from "react";

const App = () => {
  let [enabledId, setEnabledId] = useState(-1);
  let [stateData, setStateData] = useState(data);

  const changeValue = (rowIndex, name, value) => {
    let row = stateData[rowIndex];
    row[name] = value;
    let stateCopy = [...stateData];
    stateCopy[rowIndex] = row;
    setStateData(stateCopy);
  };

  function toggleEnable(rowIndex) {
    if (enabledId === rowIndex) setEnabledId(-1);
    else setEnabledId(rowIndex);
  }

  return (
    <>
      <div className="container-fluid">
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
              return (
                <tr key={index}>
                  <td>
                    <i
                      className={
                        index === enabledId
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
                      value={elem.appId}
                      onChange={(e) =>
                        changeValue(index, "appId", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={elem.appName}
                      disabled={index !== enabledId}
                      style={{ width: "130px" }}
                      name="appName"
                      onChange={(e) =>
                        changeValue(index, "appName", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={elem.state}
                      disabled={index !== enabledId}
                      style={{ width: "70px" }}
                      name="state"
                      onChange={(e) =>
                        changeValue(index, "state", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={elem.lob}
                      disabled={index !== enabledId}
                      style={{ width: "50px" }}
                      name="lob"
                      onChange={(e) =>
                        changeValue(index, "lob", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={elem.JPMC_SOX}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="jpmc_sox"
                      onChange={(e) =>
                        changeValue(index, "JPMC_SOX", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={elem.JPMC_CCAP}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="jpmc_ccap"
                      onChange={(e) =>
                        changeValue(index, "JPMC_CCAP", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={elem.SSAE_SOCI}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="ssae_soci"
                      onChange={(e) =>
                        changeValue(index, "SSAE_SOCI", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={elem.PCI}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="pci"
                      onChange={(e) =>
                        changeValue(index, "PCI", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={elem.PHI}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="phi"
                      onChange={(e) =>
                        changeValue(index, "PHI", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={elem.GLBA}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="glba"
                      onChange={(e) =>
                        changeValue(index, "GLBA", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={elem.MNPI}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="mnpi"
                      onChange={(e) =>
                        changeValue(index, "MNPI", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={elem.HVBE}
                      disabled={index !== enabledId}
                      style={{ width: "30px" }}
                      name="hvbi"
                      onChange={(e) =>
                        changeValue(index, "HVBI", e.target.value)
                      }
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
