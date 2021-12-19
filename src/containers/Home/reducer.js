import { groupBy } from "../../utils";
import {
  FETCH_NEWS_LIST,
  FETCH_NEWS_LIST_DONE,
  FETCH_PUBLISHER_NEWS_LIST,
  FETCH_PUBLISHER_NEWS_LIST_DONE
} from "./constants";

const INITIAL_NEWS_REDUCER_STATE = {
  newsList: [],
  loadingNewsList: false,
  selectedPublisher: "",
  publisherNewsList: [],
  loadingPublisherNewsList: false
};

function NewsReducer(state, action) {
  switch (action.type) {
    case FETCH_NEWS_LIST: {
      return { ...state, loadingNewsList: true };
    }
    case FETCH_NEWS_LIST_DONE: {
      const groupedPublishers = groupBy(action.payload, "PUBLISHER");
      const list = Object.keys(groupedPublishers)
        .map((each) => ({
          name: each,
          id: each,
          label: `${each} (${groupedPublishers[each].length})`,
          link: `/${encodeURIComponent(each)}`
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      return {
        ...state,
        loadingNewsList: false,
        newsList: action.payload,
        publishers: list
      };
    }
    case FETCH_PUBLISHER_NEWS_LIST: {
      const { selectedPublisher } = action.payload;
      return {
        ...state,
        selectedPublisher,
        publisherNewsList: [],
        loadingPublisherNewsList: true
      };
    }
    case FETCH_PUBLISHER_NEWS_LIST_DONE: {
      return {
        ...state,
        publisherNewsList: action.payload,
        loadingPublisherNewsList: false
      };
    }
    default:
      return state;
  }
}

NewsReducer.INITIAL_STATE = INITIAL_NEWS_REDUCER_STATE;

export default NewsReducer;
