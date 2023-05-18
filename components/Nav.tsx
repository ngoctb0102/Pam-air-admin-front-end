import { useState, useCallback, memo } from "react";
import styles from "../public/style/Nav.module.css";

function Nav(props: { onClick: (e) => void }) {
  return (
    <div className={styles.Nav}>
      <h2 style={{ marginLeft: "7px" }}>PamAir system</h2>
      <div style={{ display: "flex", marginRight: "3px" }}>
        <h3
          id="Management"
          className={styles.navCom}
          style={{ margin: "5px", opacity: "0.6" }}
          onClick={props.onClick}
        >
          Management
        </h3>
        <h3
          id="TestAPI"
          className={styles.navCom}
          style={{ margin: "5px", opacity: "0.6" }}
          onClick={props.onClick}
        >
          Test Api
        </h3>
      </div>
    </div>
  );
}

export default Nav;
