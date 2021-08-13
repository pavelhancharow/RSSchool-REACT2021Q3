import React, { useState, FormEvent, useEffect } from 'react';
import { Article } from 'src/model/cardJSON';
import SearchParamType from 'src/model/searchParam';
import getApiJSON from 'src/service/api';
import Pagination from './pagination';
import SortList from './sortList';
import Spinner from '../Spinner';
import Cards from './cards';
import SearchBar from './searchBar';

import './index.scss';

interface IHome {
  watcher: boolean;
  setWatcher: (val: boolean) => void;
  searchParam: SearchParamType;
  setSearchParam: (param: SearchParamType | ((param: SearchParamType) => SearchParamType)) => void;
}

const Home: React.FC<IHome> = ({ watcher, setWatcher, searchParam, setSearchParam }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articleItems, setArticleItems] = useState<Article[]>([]);

  const getAPICards = () => {
    setIsLoading(true);

    const response = getApiJSON(searchParam);
    response
      .then((res) => {
        const { articles, totalResults } = res;

        setArticleItems(articles);
        setSearchParam((param) => ({ ...param, totalResults }));
      })
      .catch((err) => new Error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (watcher) getAPICards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchBar getAPICards={getAPICards} setWatcher={setWatcher} setSearchParam={setSearchParam} />
      <div className="container" style={{ display: 'flex' }}>
        {articleItems.length ? (
          <SortList getAPICards={getAPICards} searchParam={searchParam} setSearchParam={setSearchParam} />
        ) : null}
      </div>
      <div className="container" style={{ padding: '40px 0' }}>
        {!isLoading ? <Cards articles={articleItems} setSearchParam={setSearchParam} /> : <Spinner />}
      </div>
      {articleItems.length ? (
        <Pagination getAPICards={getAPICards} searchParam={searchParam} setSearchParam={setSearchParam} />
      ) : null}
    </>
  );
};

export default Home;
