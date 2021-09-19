import { Article } from 'src/model/news';

export interface NewsState {
  news: Article[];
  loading: boolean;
  error: null | string;
  value: string;
  sortBy: string[];
  sort: string;
  page: number;
  limit: number;
  total: number;
  showPages: number;
  amountPages: number;
}

export enum NewsActionTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
  SET_NEWS_VALUE = 'SET_NEWS_VALUE',
  SET_NEWS_SORT = 'SET_NEWS_SORT',
  SET_NEWS_PAGE = 'SET_NEWS_PAGE',
  SET_NEWS_TOTAL = 'SET_NEWS_TOTAL',
  SET_NEWS_SHOW_PAGES = 'SET_NEWS_SHOW_PAGES'
}

interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
}

interface FetchNewsSuccessAction {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: Article[];
}

interface FetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}

interface SetNewsValueAction {
  type: NewsActionTypes.SET_NEWS_VALUE;
  payload: string;
}

interface SetNewsSortAction {
  type: NewsActionTypes.SET_NEWS_SORT;
  payload: string;
}

interface SetNewsPageAction {
  type: NewsActionTypes.SET_NEWS_PAGE;
  payload: number;
}

interface SetNewsTotalAction {
  type: NewsActionTypes.SET_NEWS_TOTAL;
  payload: number;
}

interface SetNewsShowPagesAction {
  type: NewsActionTypes.SET_NEWS_SHOW_PAGES;
  payload: number;
}

export type NewsAction =
  | FetchNewsAction
  | FetchNewsSuccessAction
  | FetchNewsErrorAction
  | SetNewsValueAction
  | SetNewsSortAction
  | SetNewsPageAction
  | SetNewsTotalAction
  | SetNewsShowPagesAction;
