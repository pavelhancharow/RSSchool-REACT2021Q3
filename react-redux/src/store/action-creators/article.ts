import { Dispatch } from 'redux';
import axios from 'axios';
import { DATANEWS } from 'src/model/news';
import { ArticleAction, ArticleActionTypes } from '../types/article';

const fetchArticle = (val: string, date: string) => {
  return async (dispatch: Dispatch<ArticleAction>): Promise<void> => {
    try {
      dispatch({ type: ArticleActionTypes.FETCH_ARTICLE });

      const response = await axios.get<DATANEWS>(
        `https://newsapi.org/v2/everything?qInTitle="${val}"&from="${date}"&to="${date}"&apiKey=7b26deb79d1e4b0cbbf087f6fcdb8add`
      );

      setTimeout(() => {
        dispatch({ type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS, payload: response.data.articles });
      }, 500);
    } catch (e) {
      dispatch({ type: ArticleActionTypes.FETCH_ARTICLE_ERROR, payload: 'Error news on load!' });
    }
  };
};

export default fetchArticle;
