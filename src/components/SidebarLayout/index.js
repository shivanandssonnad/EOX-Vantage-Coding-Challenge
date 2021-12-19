import React from "react";
import SidebarContainer from "./Container";
import SidebarMenu from "./Menu";
import styles from "./styles.module.css";
import SidebarTitle from "./Title";

function SidebarLayout(props) {
  return (
    <div className={styles["sidebar-layout-container"]}>{props.children}</div>
  );
}

SidebarLayout.SidebarMenu = SidebarMenu;
SidebarLayout.SidebarContent = SidebarContainer;
SidebarLayout.SidebarTitle = SidebarTitle;
export default SidebarLayout;
