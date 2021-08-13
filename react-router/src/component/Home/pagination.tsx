import React, { MouseEvent, useEffect, useState } from 'react';
import SearchParamType from 'src/model/searchParam';
import { queryObject } from 'src/service/api';

interface IPagination {
  getAPICards: () => void;
  searchParam: SearchParamType;
  setSearchParam: (param: SearchParamType | ((param: SearchParamType) => SearchParamType)) => void;
}

const Pagination: React.FC<IPagination> = ({ getAPICards, searchParam, setSearchParam }) => {
  const { activePage, showPages, totalResults, countPaginationOnPage: current } = searchParam;
  const { pageSize } = queryObject;
  const [result, setResult] = useState<JSX.Element[]>([]);
  const [watcher, setWatcher] = useState<boolean>(false);

  const handlePage = (e: MouseEvent) => {
    e.preventDefault();
    const { page } = (e.target as HTMLElement).dataset;

    setSearchParam((param) => ({ ...param, activePage: page ? +page : 1 }));
    setWatcher(true);
  };

  const changeCurrPage = (operator: number) => {
    setSearchParam((param) => {
      const { activePage: active, showPages: count } = param;
      const prevPage = active;
      const prevShowPages = count;

      return {
        ...param,
        activePage: prevPage + operator,
        showPages: prevShowPages + operator
      };
    });
  };

  const nextPages = (e: MouseEvent) => {
    e.preventDefault();
    changeCurrPage(current);
    setWatcher(true);
  };

  const prevPages = (e: MouseEvent) => {
    e.preventDefault();
    changeCurrPage(-current);
    setWatcher(true);
  };

  useEffect(() => {
    if (watcher) getAPICards();

    for (let i = showPages - (current - 1); i <= showPages; i += 1) {
      const item = (
        <li className={`page-item ${activePage === i ? 'active' : null}`} key={i}>
          <a className="page-link" href="/" data-page={i} onClick={handlePage}>
            {i}
          </a>
        </li>
      );

      setResult((curr) => [...curr, item]);
    }

    return () => setResult([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage, showPages]);

  return (
    <div style={{ display: 'flex', paddingBottom: '40px' }}>
      <ul className="pagination" style={{ margin: '0 auto' }}>
        <li className={`page-item ${showPages === current ? 'disabled' : null}`}>
          <a className="page-link" href="/" onClick={prevPages}>
            &laquo;
          </a>
        </li>
        {result}
        <li className={`page-item ${showPages > Math.floor(totalResults / pageSize) ? 'disabled' : null}`}>
          <a className="page-link" href="/" onClick={nextPages}>
            &raquo;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
