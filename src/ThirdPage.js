import React, { useState } from "react";

const ThirdPage = () => {
  const [iconClicked, setIconClicked] = useState("0px");
  const [plusBtn, setPlusBtn] = useState("none");

  const clickEventHandler = () => {
    if (iconClicked === "0px") {
      setIconClicked("-300px");
      setPlusBtn("grid");
    } else {
      setIconClicked("0px");
    }
  };

  const plusBtnClicked = () => {
    if (iconClicked === "-300px") {
      setIconClicked("0px");
    }
    setPlusBtn("none");
  };

  const navbarStyle = {
    backgroundColor: "#0E2D51",
    color: "#fff",
    padding: "10px 8px",
    width: "100vw",
  };

  const sidebarStyle = {
    height: "100vh",
    width: "300px",
    left: iconClicked,
    position: "absolute",
    backgroundColor: "#333333",
  };

  const iconStyle = {
    position: "absolute",
    right: "5px",
    top: "0px",
    fontSize: "27px",
    color: "#fff",
    cursor: "pointer",
  };

  const flagStyle = {
    backgroundColor: "#595959",
    color: "#fff",
    marginTop: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    padding: "10px",
  };

  const plusIcon = {
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    boxShadow: "0 0 4px gray",
    display: plusBtn,
    placeItems: "center",
    position: "fixed",
    left: "30px",
    bottom: "30px",
    fontSize: "30px",
    lineHeight: "50px",
    cursor: "pointer",
  };

  return (
    <>
      <div
        className="containern d-flex flex-row justify-content-between align-items-start"
        style={{ position: "relative" }}
      >
        <div className=" sidebar" style={sidebarStyle}>
          <div
            className="cancel-icon"
            onClick={() => clickEventHandler()}
            style={iconStyle}
          >
            <i className="bi bi-x"></i>
          </div>
          <div className="data-one" style={flagStyle}>
            <i className="bi bi-house-door-fill"></i> &nbsp; Feed Flags
          </div>
        </div>
        <div
          className=" navvbar d-flex justify-content-between  align-items-center"
          style={navbarStyle}
        >
          <div className="leftSide" style={{ width: "100px" }}></div>
          <div className="title-name">CTC Reference Data Administration</div>
          <div className="extreme-right">
            undefined, undefined <i className="bi bi-caret-down-fill"></i>
          </div>
        </div>

        <div className="plus-icon" onClick={plusBtnClicked} style={plusIcon}>
          <i class="bi bi-plus"></i>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
