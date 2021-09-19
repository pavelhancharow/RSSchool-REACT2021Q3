import React, { useEffect } from 'react';
import useTypedSelector from 'src/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchNews } from 'src/store/action-creators/news';
import Pagination from './pagination';
import SortList from './sortList';
import Spinner from '../../components/Spinner';
import Cards from './cards';
import SearchBar from './searchBar';

import './index.css';
import ErrorPage from '../NotFound';

const Home: React.FC = () => {
  const { news, loading, error, value, sort, page } = useTypedSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    if (value) dispatch(fetchNews(value, sort, page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, sort, page]);

  if (error) return <ErrorPage />;

  return (
    <>
      <SearchBar />
      <div className="container" style={{ display: 'flex' }}>
        {news.length ? <SortList /> : <p className="sort">No news yet!</p>}
      </div>
      <div className="container" style={{ padding: '40px 0' }}>
        {!loading ? <Cards /> : <Spinner />}
      </div>
      {news.length ? <Pagination /> : null}
    </>
  );
};

export default Home;
