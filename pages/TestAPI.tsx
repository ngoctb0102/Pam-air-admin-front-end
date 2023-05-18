import { useState, useCallback, memo, useRef } from "react";
import Map from "../lib/Map";
import Nav from "../components/Nav";
import ModalBox from "../components/ModalBox";
import SearchBar from "../components/SearchBar";
import DropDownMenu from "../components/DropDownMenu";
import styleTestAPI from "../public/style/TestAPI.module.css";
const renderComopnent = (requiredList) => {
  return requiredList.map((item, index) => {
    return <a style={{ color: "white" }}>{item}</a>;
  });
};
const selectAPIMenu: any = (requiredList, embeddedText: string) => {
  return (
    <div className={styleTestAPI.dropdownTestAPI}>
      <div className={styleTestAPI.dropBoxTestAPI}>
        <input style={{ width: "93px" }} placeholder={embeddedText} />
      </div>
      <div className={styleTestAPI.dropdownContentTestAPI}>
        {renderComopnent(requiredList)}
      </div>
    </div>
  );
};

export default function TestAPI() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {selectAPIMenu(["Ha Noi", "Ho Chi Minh", "singapore"], "select city")}
        {selectAPIMenu(["Ha Noi", "Ho Chi Minh"], "select district")}
        {selectAPIMenu(["Ha Noi", "Ho Chi Minh"], "select model")}
        <button>Get Predict</button>
      </div>
    </div>
  );
}
