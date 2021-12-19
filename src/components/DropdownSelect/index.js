import React from "react";
import styles from "./styles.module.css";

function DropdownSelect(props) {
  const [show, setShow] = React.useState(false);
  return (
    <span className={styles["dropdown-container"]}>
      <span className={styles["dropdown-title"]} onClick={() => setShow(!show)}>
        <b>{props.title}</b>
      </span>
      {show && (
        <div className={styles["dropdown-content"]}>{props.children}</div>
      )}
    </span>
  );
}

export default DropdownSelect;
