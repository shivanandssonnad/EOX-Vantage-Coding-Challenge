import React from "react";
import styles from "./styles.module.css";

function NewsItem(props) {
  const { title, id, publisher, host, timestamp, category } = props;
  const dateString = new Date(timestamp).toString();
  return (
    <div className={styles["news-item-container"]} onClick={props.onClick}>
      <div>Id: {id}</div>
      <div>Title: {title}</div>
      <div>Category: {category}</div>
      <div>Publisher: {publisher}</div>
      <div>Host: {host}</div>
      <div>Last Updated: {dateString}</div>
    </div>
  );
}

export default NewsItem;
