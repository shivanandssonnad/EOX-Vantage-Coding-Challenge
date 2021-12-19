import React from "react";
import { useParams } from "react-router-dom";
import { fetchPublisherNewsList } from "../Home/actions";
import HomeContext from "../Home/HomeContext";
import NewsItem from "./NewsItem";
import styles from "./styles.module.css";

function Publisher(props) {
  const { state, dispatch } = React.useContext(HomeContext);
  const { publisher } = useParams();
  const { selectedPublisher, publisherNewsList, loadingPublisherNewsList } =
    state || {};

  React.useEffect(() => {
    dispatch(fetchPublisherNewsList({ selectedPublisher: publisher }));
  }, [publisher, dispatch]);

  if (loadingPublisherNewsList) return <div>Loading...</div>;

  function handleClick(url) {
    window.open(url);
  }

  function renderNews(each) {
    return (
      <NewsItem
        key={each.ID}
        id={each.ID}
        title={each.TITLE}
        url={each.URL}
        category={each.CATEGORY}
        publisher={each.PUBLISHER}
        host={each.HOSTNAME}
        timestamp={each.TIMESTAMP}
        onClick={() => handleClick(each.URL)}
      />
    );
  }

  return <div>{publisherNewsList.map(renderNews)}</div>;
}

export default Publisher;
