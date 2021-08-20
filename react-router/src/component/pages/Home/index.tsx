import React, { useState, useEffect } from 'react';
import { Article } from '../../../model/types';
import searchData from '../../../data/searchData';
import getNewsData from '../../../service/api';
import Pagination from './pagination';
import SortList from './sortList';
import Spinner from '../../Spinner';
import Cards from './cards';
import SearchBar from './searchBar';

import './index.scss';

const Home: React.FC = () => {
  const { isToGetFetch } = searchData;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchNewsHandler = () => {
    setIsLoading(true);

    const response = getNewsData(searchData);
    response
      .then((res) => {
        const { articles: articlesData, totalResults } = res;

        setArticles(articlesData);
        searchData.totalResults = totalResults;
      })
      .catch((err) => new Error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isToGetFetch) fetchNewsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchBar onFetchNews={fetchNewsHandler} />
      <div className="container" style={{ display: 'flex' }}>
        {articles.length ? <SortList onFetchNews={fetchNewsHandler} /> : <p className="sort">No news yet!</p>}
      </div>
      <div className="container" style={{ padding: '40px 0' }}>
        {!isLoading ? <Cards articles={articles} /> : <Spinner />}
      </div>
      {articles.length ? <Pagination onFetchNews={fetchNewsHandler} /> : null}
    </>
  );
};

export default Home;
