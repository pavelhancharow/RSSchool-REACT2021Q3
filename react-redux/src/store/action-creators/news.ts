import { Dispatch } from 'redux';
import axios from 'axios';
import { DATANEWS } from 'src/model/news';
import { NewsAction, NewsActionTypes } from '../types/news';

export const fetchNews = (q: string, sort: string, page: number) => {
  return async (dispatch: Dispatch<NewsAction>): Promise<void> => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS });

      const response = await axios.get<DATANEWS>(
        `https://newsapi.org/v2/everything?q=${q}&language=en&sortBy=${sort}&pageSize=9&page=${page}&apiKey=7b26deb79d1e4b0cbbf087f6fcdb8add`
      );

      setTimeout(() => {
        dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response.data.articles });
        dispatch({ type: NewsActionTypes.SET_NEWS_TOTAL, payload: response.data.totalResults });
      }, 500);
    } catch (e) {
      dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: 'Error news on load!' });
    }
  };
};

export const setNewsValue = (value: string): NewsAction => {
  return { type: NewsActionTypes.SET_NEWS_VALUE, payload: value };
};

export const setNewsSort = (value: string): NewsAction => {
  return { type: NewsActionTypes.SET_NEWS_SORT, payload: value };
};

export const setNewsPage = (page: number): NewsAction => {
  return { type: NewsActionTypes.SET_NEWS_PAGE, payload: page };
};

export const setNewsShowPage = (page: number): NewsAction => {
  return { type: NewsActionTypes.SET_NEWS_SHOW_PAGES, payload: page };
};
