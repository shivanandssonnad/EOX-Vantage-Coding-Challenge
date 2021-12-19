import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function SidebarMenu(props) {
  const { list, selectedMenu, className } = props;

  const [query, setQuery] = React.useState("");
  const options = React.useMemo(() => {
    return list.filter((each) =>
      each.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [list, query]);

  function renderMenutItem(each) {
    return (
      <li key={each.id}>
        <Link
          className={classNames({
            [styles.active]: selectedMenu === each.id
          })}
          to={each.link}
        >
          {each.label}
        </Link>
      </li>
    );
  }
  return (
    <div className={classNames(styles["sidebar-menu-container"], className)}>
      <input
        type="text"
        value={query}
        onChange={(evt) => setQuery(evt.target.value || "")}
        placeholder="Search By Publisher"
      />
      <ul>{options.map(renderMenutItem)}</ul>
    </div>
  );
}

SidebarMenu.defaultProps = {
  list: [],
  className: ""
};

export default SidebarMenu;
