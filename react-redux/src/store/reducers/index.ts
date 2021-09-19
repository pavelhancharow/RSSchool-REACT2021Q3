import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import newsReducer from './newsReducer';

export const rootReducer = combineReducers({
  news: newsReducer,
  article: articleReducer
});

export type RootState = ReturnType<typeof rootReducer>;
