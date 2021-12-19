import React from "react";
import DropdownSelect from "../DropdownSelect";
import SidebarMenu from "./Menu";

import styles from "./styles.module.css";

function SidebarTitle(props) {
  return (
    <div className={styles["sidebar-title-container"]}>
      <DropdownSelect title={props.title}>
        <SidebarMenu
          className={props.className}
          selectedMenu={props.selectedMenu}
          loading={props.loading}
          list={props.list}
        />
      </DropdownSelect>
    </div>
  );
}

export default SidebarTitle;
