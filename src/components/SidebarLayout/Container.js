import React from "react";
import styles from "./styles.module.css";

function SidebarContainer(props) {
  return (
    <div className={styles["sidebar-content-container"]}>{props.children}</div>
  );
}

export default SidebarContainer;
