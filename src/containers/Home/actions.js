import {
  FETCH_NEWS_LIST,
  FETCH_NEWS_LIST_DONE,
  FETCH_PUBLISHER_NEWS_LIST,
  FETCH_PUBLISHER_NEWS_LIST_DONE
} from "./constants";

export function fetchNewsList(payload) {
  return {
    type: FETCH_NEWS_LIST,
    payload
  };
}

export function fetchNewsListDone(payload) {
  return {
    type: FETCH_NEWS_LIST_DONE,
    payload
  };
}

export function fetchPublisherNewsList(payload) {
  return {
    type: FETCH_PUBLISHER_NEWS_LIST,
    payload
  };
}

export function fetchPublisherNewsListDone(payload) {
  return {
    type: FETCH_PUBLISHER_NEWS_LIST_DONE,
    payload
  };
}
