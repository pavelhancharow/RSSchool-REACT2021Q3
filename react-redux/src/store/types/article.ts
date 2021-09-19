import { Article } from 'src/model/news';

export interface ArticleState {
  article: Article[];
  loading: boolean;
  error: null | string;
}

export enum ArticleActionTypes {
  FETCH_ARTICLE = 'FETCH_ARTICLE',
  FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR'
}

interface FetchArticleAction {
  type: ArticleActionTypes.FETCH_ARTICLE;
}

interface FetchArticleSuccessAction {
  type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS;
  payload: Article[];
}

interface FetchArticleErrorAction {
  type: ArticleActionTypes.FETCH_ARTICLE_ERROR;
  payload: string;
}

export type ArticleAction = FetchArticleAction | FetchArticleSuccessAction | FetchArticleErrorAction;
