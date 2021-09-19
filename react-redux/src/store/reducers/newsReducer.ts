import { NewsAction, NewsActionTypes, NewsState } from '../types/news';

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
  value: '',
  sortBy: ['relevancy', 'popularity', 'publishedAt'],
  sort: 'relevancy',
  page: 1,
  limit: 9,
  total: 0,
  showPages: 5,
  amountPages: 5
};

const newsReducer = (state = initialState, action: NewsAction): NewsState => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return { ...state, loading: true };
    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return { ...state, loading: false, news: action.payload };
    case NewsActionTypes.FETCH_NEWS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case NewsActionTypes.SET_NEWS_VALUE:
      return { ...state, value: action.payload };
    case NewsActionTypes.SET_NEWS_SORT:
      return { ...state, sort: action.payload };
    case NewsActionTypes.SET_NEWS_PAGE:
      return { ...state, page: action.payload };
    case NewsActionTypes.SET_NEWS_TOTAL:
      return { ...state, total: action.payload };
    case NewsActionTypes.SET_NEWS_SHOW_PAGES:
      return { ...state, showPages: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
