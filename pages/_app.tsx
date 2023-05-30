import { useState, useCallback, memo, useRef } from "react";
import Map from "../lib/Map";
import Nav from "../components/Nav";
import "../public/style/App.css";
import ModalBox from "../components/ModalBox";
import SearchBar from "../components/SearchBar";
import DropDownMenu from "../components/DropDownMenu";
import Management from "./Management";
import TestAPI from "./TestAPI";
function App() {
  const [pageRoute, setPageRoute] = useState("Management");
  return (
    <div className="App">
      <div style={{ height: "100%" }}>
        <Nav
          onClick={(e) => {
            if (e.target.id === "TestAPI") {
              setPageRoute("Management");
            } else {
              setPageRoute("TestAPI");
            }
          }}
        />
        {pageRoute === "Management" ? <TestAPI /> : <Management />}
      </div>
    </div>
  );
}

export default App;
