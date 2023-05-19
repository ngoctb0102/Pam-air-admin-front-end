import { useState, useCallback, memo, useRef } from "react";
import Map from "../lib/Map";
import Nav from "../components/Nav";
import ModalBox from "../components/ModalBox";
import SearchBar from "../components/SearchBar";
import DropDownMenu from "../components/DropDownMenu";
import styleTestAPI from "../public/style/TestAPI.module.css";
import { HaNoiDistrict } from "../lib/HaNoiDistrict";
export default function TestAPI() {
  let [cityState, setCityState] = useState("");
  let [districtState, setDistrictState] = useState("");
  let [modelState, setModelState] = useState("");
  const predictCard = (pollutionLevel, AQILevel, model) => {
    let color = "";
    if (pollutionLevel === "moderate") {
      color = "yellow";
    } else {
      color = "orange";
    }
    return (
      <div style={{ display: "flex" }}>
        <h5 style={{ width: "100px" }}>xx/xx/xxxx</h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
            border: `2px solid ${color}`,
            borderRadius: "15px",
            padding: "5px",
            backgroundColor: `${color}`,
          }}
        >
          <h5>{pollutionLevel}</h5>
          <div style={{ display: "flex" }}>
            <h5 style={{ marginRight: "50px" }}>{AQILevel}</h5>
            <div>someIcon</div>
          </div>
        </div>
      </div>
    );
  };
  const checkName = (className, item) => {
    if (className === "city") {
      setCityState(item);
      console.log("1" + cityState);
    } else if (className === "district") {
      setDistrictState(item);
      console.log("2" + districtState);
    } else {
      setModelState(item);
      console.log("3" + modelState);
    }
  };
  const renderComponent = (requiredList: Array<string>, className) => {
    return requiredList.map((item, index) => {
      return (
        <a
          onClick={() => {
            checkName(className, item);
            console.log(className);
          }}
          className={className}
          key={index}
        >
          {item}
        </a>
      );
    });
  };
  const selectAPIMenu: any = (
    requiredList,
    embeddedText: string,
    className: string
  ) => {
    return (
      <div className={styleTestAPI.dropdownTestAPI}>
        <div className={styleTestAPI.dropBoxTestAPI}>
          <input
            style={{
              width: "150px",
              height: "30px",
              border: "2px solid black",
              marginRight: "20px",
            }}
            placeholder={embeddedText}
          />
        </div>
        <div className={styleTestAPI.dropdownContentTestAPI}>
          {renderComponent(requiredList, className)}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex" }}>
          <div>
            <h3>City</h3>
            {selectAPIMenu(["Ha Noi", "Ho Chi Minh"], "select city", "city")}
          </div>
          <div>
            <h3>District</h3>
            {selectAPIMenu(HaNoiDistrict, "select district", "district")}
          </div>
          <div>
            <h3>Model</h3>
            {selectAPIMenu(["12 hours", "3 days"], "select model", "model")}
          </div>
        </div>
        <button className={styleTestAPI.buttonAPIPredict}>
          Get Predict Result
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <div>
          <div style={{ marginLeft: "20px", width: "200px" }}>
            <h1 style={{ backgroundColor: "gray", width: "120px" }}>
              Location
            </h1>
            <h3>{cityState + "," + districtState}</h3>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h1 style={{ backgroundColor: "gray", width: "120px" }}>Model</h1>
            <h3>{modelState}</h3>
          </div>
        </div>
        <div
          style={{
            marginLeft: "150px",
          }}
        >
          <div style={{ display: "flex" }}>
            <h3 style={{ marginRight: "20px", width: "100px" }}>Day</h3>
            <h3>Pollution Level</h3>
          </div>
          <div
            style={{
              border: "2px solid rgba(0, 0, 0, 0.3)",
              borderRadius: "15px",
              height: "400px",
              padding: "10px",
              overflowY: "auto",
            }}
          >
            {predictCard("moderate", "AQI", "something")}
          </div>
        </div>
      </div>
    </div>
  );
}
