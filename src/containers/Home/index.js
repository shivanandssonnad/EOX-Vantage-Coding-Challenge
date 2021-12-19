import React from "react";
import { Outlet, useParams } from "react-router-dom";
import API from "../../apis";
import SidebarLayout from "../../components/SidebarLayout";
import {
  fetchNewsList,
  fetchNewsListDone,
  fetchPublisherNewsListDone
} from "./actions";
import HomeContext from "./HomeContext";
import NewsReducer from "./reducer";

import styles from "./styles.module.css";

function Home(props) {
  // create reducer for Home route
  const [state, dispatch] = React.useReducer(
    NewsReducer,
    NewsReducer.INITIAL_STATE
  );

  const { publisher } = useParams();

  const {
    newsList,
    loadingNewsList,
    publishers,
    loadingPublisherNewsList,
    selectedPublisher
  } = state;

  // function to get news list
  function getAllNews() {
    return fetch(API.getNewsList)
      .then((res) => res.json())
      .then((res) => (Array.isArray(res) ? res : []));
  }

  // fetch news list on mount
  React.useEffect(() => {
    dispatch(fetchNewsList());
  }, []);

  // fetch news list if loading news list = true
  React.useEffect(() => {
    if (loadingNewsList) {
      getAllNews().then((res) => {
        dispatch(fetchNewsListDone(res));
      });
    }
  }, [loadingNewsList]);

  // fetch publisher news list if loading publisher news list = true
  React.useEffect(() => {
    if (loadingPublisherNewsList) {
      const publisherNewsList = newsList
        .filter((each) => each.PUBLISHER === selectedPublisher)
        .sort((a, b) => b.TIMESTAMP - a.TIMESTAMP);
      dispatch(fetchPublisherNewsListDone(publisherNewsList));
    }
  }, [loadingPublisherNewsList, newsList, selectedPublisher]);

  if (loadingNewsList) return <div>Loading</div>;

  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      <SidebarLayout>
        <SidebarLayout.SidebarMenu
          className={styles["sidebar-menu-container"]}
          selectedMenu={publisher}
          loading={loadingNewsList}
          list={publishers}
        />
        <SidebarLayout.SidebarContent>
          <SidebarLayout.SidebarTitle
            className={styles["dropdown-menu-container"]}
            title={publisher || "select"}
            selectedMenu={publisher}
            loading={loadingNewsList}
            list={publishers}
          />
          <Outlet />
        </SidebarLayout.SidebarContent>
      </SidebarLayout>
    </HomeContext.Provider>
  );
}

export default Home;
