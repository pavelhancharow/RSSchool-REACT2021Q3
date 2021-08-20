import React, { MouseEvent, useEffect, useState } from 'react';
import searchData from '../../../data/searchData';
import queryData from '../../../data/queryData';

interface PaginationProps {
  onFetchNews: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ onFetchNews }) => {
  const { activePage, showPages, totalResults, amountPages: amount } = searchData;
  const { pageSize } = queryData;
  const [result, setResult] = useState<JSX.Element[]>([]);
  const [watcher, setWatcher] = useState<boolean>(false);

  const handlePage = (e: MouseEvent) => {
    e.preventDefault();

    const { page } = (e.target as HTMLElement).dataset;
    searchData.activePage = page ? +page : 1;

    setWatcher(true);
  };

  const changeCurrPage = (n: number) => {
    searchData.activePage += n;
    searchData.showPages += n;
  };

  const nextPagesHandler = (e: MouseEvent) => {
    e.preventDefault();
    changeCurrPage(amount);
    setWatcher(true);
  };

  const prevPagesHandler = (e: MouseEvent) => {
    e.preventDefault();
    changeCurrPage(-amount);
    setWatcher(true);
  };

  useEffect(() => {
    if (watcher) {
      onFetchNews();
      setWatcher(false);
    }

    for (let i = showPages - (amount - 1); i <= showPages; i += 1) {
      const item = (
        <li className={`page-item ${activePage === i ? 'active' : ''}`} key={i}>
          <a className="page-link" href="/" data-page={i} onClick={handlePage}>
            {i}
          </a>
        </li>
      );

      setResult((curr) => [...curr, item]);
    }

    return () => setResult([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watcher]);

  return (
    <div style={{ display: 'flex', paddingBottom: '40px' }}>
      <ul className="pagination" style={{ margin: '0 auto' }}>
        <li className={`page-item ${showPages === amount ? 'disabled' : ''}`}>
          <a className="page-link" href="/" onClick={prevPagesHandler}>
            &laquo;
          </a>
        </li>
        {result}
        <li className={`page-item ${showPages > Math.floor(totalResults / pageSize) ? 'disabled' : ''}`}>
          <a className="page-link" href="/" onClick={nextPagesHandler}>
            &raquo;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
