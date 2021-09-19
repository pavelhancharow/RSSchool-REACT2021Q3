import { ArticleAction, ArticleActionTypes, ArticleState } from '../types/article';

const initialState: ArticleState = {
  article: [],
  loading: true,
  error: null
};

const articleReducer = (state = initialState, action: ArticleAction): ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_ARTICLE:
      return { ...state, loading: true };
    case ArticleActionTypes.FETCH_ARTICLE_SUCCESS:
      return { ...state, loading: false, article: action.payload };
    case ArticleActionTypes.FETCH_ARTICLE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default articleReducer;
