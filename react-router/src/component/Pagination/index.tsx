import React, { MouseEvent, useEffect, useState } from 'react';
import { Article } from 'src/model/cardJSON';
import { pageAPICards, queryObject } from 'src/service/api';

interface IPagination {
  activePage: number;
  setActivePage: (val: number | ((val: number) => number)) => void;
  showPages: number;
  setShowPages: (val: number | ((val: number) => number)) => void;
  setIsLoading: (value: boolean) => void;
  setArticles: (value: Article[]) => void;
  totalResults: number;
}

const current = 5;

const Pagination: React.FC<IPagination> = ({
  activePage,
  setActivePage,
  showPages,
  setShowPages,
  setIsLoading,
  setArticles,
  totalResults
}) => {
  const [result, setResult] = useState<JSX.Element[]>([]);

  const handlePage = (e: MouseEvent) => {
    e.preventDefault();
    const { page } = (e.target as HTMLElement).dataset;
    setActivePage(page ? +page : 1);
  };

  const nextPages = (e: MouseEvent) => {
    e.preventDefault();
    setActivePage((val) => val + current);
    setShowPages((val) => val + current);
  };

  const prevPages = (e: MouseEvent) => {
    e.preventDefault();
    setActivePage((val) => val - current);
    setShowPages((val) => val - current);
  };

  useEffect(() => {
    setIsLoading(true);

    const response = pageAPICards(activePage.toString());
    response
      .then((res) => setArticles(res.articles))
      .catch((err) => new Error(err))
      .finally(() => setIsLoading(false));

    for (let i = showPages - (current - 1); i <= showPages; i += 1) {
      const item = (
        <li className={`page-item ${+activePage === i ? 'active' : null}`} key={i}>
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
        <li className={`page-item ${showPages > Math.floor(totalResults / queryObject.pageSize) ? 'disabled' : null}`}>
          <a className="page-link" href="/" onClick={nextPages}>
            &raquo;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
