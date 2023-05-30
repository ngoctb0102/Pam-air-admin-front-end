import { useState, useCallback, memo, useRef } from "react";
import Map from "../lib/Map";
import Nav from "../components/Nav";
import ModalBox from "../components/ModalBox";
import SearchBar from "../components/SearchBar";
import DropDownMenu from "../components/DropDownMenu";
import styleTestAPI from "../public/style/TestAPI.module.css";
import { HaNoiDistrict } from "../lib/HaNoiDistrict";
import { HoChiMinhDistrict } from "../lib/HoChiMinhDistrict";

export default function TestAPI() {
  let [cityState, setCityState] = useState("");
  let [districtState, setDistrictState] = useState("");
  let [modelState, setModelState] = useState("");
  let [cardClickCheck, setCardClickCheck] = useState(1);
  let [dataAPI, setDataAPI] = useState({
    aqi_us: [],
    aqi_vn: [],
    "pm2.5": [],
    time: [],
  });
  const fetchTestAPIOnClick = async () => {
    if (modelState === "12 hours") {
      const res = await fetch("http://202.191.58.206/pamair/hourly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: cityState,
          district: districtState,
        }),
      });
      const data = await res.json();
      setDataAPI({
        aqi_us: data.aqi_us,
        aqi_vn: data.aqi_vn,
        "pm2.5": data["pm2.5"],
        time: data.time,
      });
      console.log(dataAPI);
    } else {
      const res = await fetch("http://202.191.58.206/pamair/dayly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: cityState,
          district: districtState,
        }),
      });
      const data = await res.json();
      setDataAPI({
        aqi_us: data.aqi_us,
        aqi_vn: data.aqi_vn,
        "pm2.5": data["pm2.5"],
        time: data.time,
      });
      console.log(dataAPI);
    }
  };
  const predictCard = (time, pm25, pollutionLevel, VNAQILevel, USAQILevel) => {
    let color = "";
    if (pollutionLevel === "moderate") {
      color = "yellow";
    } else {
      color = "orange";
    }
    return (
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <h5 style={{ width: "100px" }}>{time}</h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "700px",
            border: `2px solid ${color}`,
            borderRadius: "15px",
            padding: "5px",
            backgroundColor: `${color}`,
          }}
        >
          <h5 style={{ marginRight: "20px" }}>{pollutionLevel}</h5>
          <div>
            <h5 style={{ marginRight: "20px", marginBottom: "0" }}>pm2.5</h5>
            <h5 style={{ marginRight: "20px", marginTop: "0" }}>{pm25}</h5>
          </div>
          <div style={{ display: "flex" }}>
            <h5 style={{ marginRight: "20px" }}>{VNAQILevel}</h5>
            <h5 style={{ marginRight: "20px" }}>{USAQILevel}</h5>
            <div>someIcon</div>
          </div>
        </div>
      </div>
    );
  };

  const checkName = (className, item) => {
    if (className === "city") {
      setCityState(item);
    } else if (className === "district") {
      setDistrictState(item);
    } else {
      setModelState(item);
    }
  };
  const renderComponent = (requiredList: Array<string>, className) => {
    return requiredList.map((item, index) => {
      return (
        <a
          onClick={() => {
            checkName(className, item);
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
            {selectAPIMenu(
              cityState === "Ha Noi" ? HaNoiDistrict : HoChiMinhDistrict,
              "select district",
              "district"
            )}
          </div>
          <div>
            <h3>Model</h3>
            {selectAPIMenu(["12 hours", "3 days"], "select model", "model")}
          </div>
        </div>
        <button
          className={styleTestAPI.buttonAPIPredict}
          onClick={() => {
            if (cardClickCheck === 1) {
              setCardClickCheck(0);
            } else if (cardClickCheck === 0) {
              setCardClickCheck(0);
            }

            if (cityState && districtState && modelState) {
              fetchTestAPIOnClick();
            } else {
              alert(`Error:please prompt city and district`);
            }
          }}
        >
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
            <h3 style={{ marginRight: "20px", width: "100px" }}>
              {modelState === "12 hours" ? "Hour" : "Day"}
            </h3>
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
            {dataAPI.time.map((item, index) => {
              return predictCard(
                dataAPI.time[index],
                dataAPI["pm2.5"][index],
                "moderate",
                dataAPI.aqi_vn[index] + " VN AQI",
                dataAPI.aqi_us[index] + " US AQI"
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
